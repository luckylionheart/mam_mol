namespace $ {
	
	export class $mol_graph< Node , Edge > {
		
		nodes = new Set< Node >()
		
		edges_out = new Map< Node , Map< Node , Edge > >()
		edges_in = new Map< Node , Map< Node , Edge > >()
		
		link_out( from : Node , to : Node , edge : Edge ) {
			
			let pair = this.edges_out.get( from )
			
			if( !pair ) {
				pair = new Map< Node , Edge >()
				this.edges_out.set( from , pair )
				this.nodes.add( from )
			}
			
			pair.set( to , edge )
			this.nodes.add( to )

		}
		
		link_in( to : Node , from : Node , edge : Edge ) {

			let pair = this.edges_in.get( to )
			
			if( !pair ) {
				pair = new Map< Node , Edge >()
				this.edges_in.set( to , pair )
				this.nodes.add( to )
			}
			
			pair.set( from , edge )
			this.nodes.add( to )

		}
		
		edge_out( from : Node , to : Node ) {
			return this.edges_out.get( from )?.get( to ) ?? null
		}
		
		edge_in( to : Node , from : Node ) {
			return this.edges_in.get( to )?.get( from ) ?? null
		}
		
		link( from : Node , to : Node , edge : Edge ) {
			this.link_out( from , to , edge )
			this.link_in( to , from , edge )
		}
		
		unlink( from : Node , to : Node ) {
			this.edges_in.get( to )?.delete( from )
			this.edges_out.get( from )?.delete( to )
		}
		
		acyclic( get_weight : ( edge : Edge )=> number ) {
			
			const checked = [] as Node[]
			
			for( const start of this.nodes ) {
				
				const path = [] as Node[]
				
				const visit = ( from : Node ) : number => {

					if( checked.includes( from ) ) return Number.MAX_SAFE_INTEGER

					const index = path.lastIndexOf( from )
					if( index > -1 ) {

						const cycle = path.slice( index )

						return cycle.reduce(
							( weight , node , index )=> Math.min(
								weight ,
								get_weight( this.edge_out( node , cycle[ ( index + 1 ) % cycle.length ] )! ) ,
							) ,
							Number.MAX_SAFE_INTEGER ,
						)

					}

					path.push( from )

					dive: try {

						const deps = this.edges_out.get( from )
						if( !deps ) break dive

						for( const [ to , edge ] of deps ) {

							if( to === from ) {
								this.unlink( from , to )
								continue
							}

							const weight_out = get_weight( edge )
							const min = visit( to )
							
							if( weight_out > min ) return min
							if( weight_out === min ) {
								
								this.unlink( from , to )
								
								if( path.length > 1 ) {
									const enter = path[ path.length - 2 ]
									this.link( enter , to , edge )
								}
								
							}
							
						}

					} finally {
						path.pop()
					}

					checked.push( from )

					return Number.MAX_SAFE_INTEGER
				}

				visit( start )

			}

		}
		
		acyclic2( compare : ( left : Edge, right : Edge )=> number ) {
			
			const checked = [] as Node[]
			
			const pick = ( left: Edge | null, right: Edge | null )=> {
				if( left === null ) return right
				if( right === null ) return left
				if( compare( left, right ) < 0 ) return left
				return right
			}
			
			for( const start of this.nodes ) {
				
				const path = [] as Node[]
				
				const visit = ( from : Node ) : Edge | null => {

					if( checked.includes( from ) ) return null

					const index = path.lastIndexOf( from )
					if( index > -1 ) {

						const cycle = path.slice( index )

						return cycle.reduce(
							( weak , node , index )=> pick(
								weak ,
								this.edge_out( node , cycle[ ( index + 1 ) % cycle.length ] )!,
							) ,
							null as Edge | null,
						)

					}

					path.push( from )

					dive: try {

						const deps = this.edges_out.get( from )
						if( !deps ) break dive

						for( const [ to , edge ] of deps ) {

							if( to === from ) {
								this.unlink( from , to )
								continue
							}

							const min = visit( to )
							if( min === null ) continue
							
							const cmp = compare( edge, min )
							if( cmp > 0 ) return min
							if( cmp === 0 ) {
								
								this.unlink( from , to )
								
								if( path.length > 1 ) {
									const enter = path[ path.length - 2 ]
									this.link( enter , to , edge )
								}
								
							}
							
						}

					} finally {
						path.pop()
					}

					checked.push( from )

					return null
				}

				visit( start )

			}

		}
		
		get sorted() {

			const sorted = new Set< Node >()
			
			const visit = ( node : Node ) => {
				
				if( sorted.has( node ) ) return

				const deps = this.edges_out.get( node )

				if( deps ) {
					for( const [dep] of deps ) visit( dep )
				}

				sorted.add( node )
			}
			
			for( const node of this.nodes ) {
				visit( node )
			}
			
			return sorted
		}
		
		get roots() {
			
			const roots = [] as Node[]
			for( const node of this.nodes ) {
				
				if( this.edges_in.get( node )?.size ) continue
				roots.push( node )
				
			}
			
			return roots
		}
		
		depth( select: ( left: number, right: number )=> number ) {
			
			const stat = new Map< Node, number >()
			const visit = ( node: Node, depth = 0 )=> {
				
				if( stat.has( node ) ) stat.set( node, select( depth, stat.get( node )! ) )
				else stat.set( node, depth )
				
				for( const kid of this.edges_out.get( node )?.keys() ?? [] ) visit( kid, depth + 1 )
				
			}
			for( const root of this.roots ) visit( root )
			
			return stat
		}
		
		get depth_min() {
			return this.depth( Math.min )
		}
		
		get depth_max() {
			return this.depth( Math.max )
		}
		
		group_depth( select: ( left: number, right: number )=> number ) {
			
			const groups = [] as Node[][]
			for( const [ node, depth ] of this.depth( select ).entries() ) {
				
				if( groups[ depth ] ) groups[ depth ].push( node )
				else groups[ depth ] = [ node ]
				
			}
			
			return groups
		}
		
		get group_depth_min() {
			return this.group_depth( Math.min )
		}
		
		get proup_depth_max() {
			return this.group_depth( Math.max )
		}
		
	}
	
}
