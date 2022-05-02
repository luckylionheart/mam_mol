namespace $.$$ {
	
	type Field = $mol_type_keys_extract< $mol_form_demo_model, ()=> string >
	
	export class $mol_form_demo_draft extends $.$mol_form_demo_draft {
		
		@ $mol_mem_key
		value_str( field: Field, next? : string | null ) {
			return $mol_state_local.value( `${ this }.value_str(${ JSON.stringify(field) })` , next )
				?? this.model()[ field ]()
				?? ''
		}
		
		@ $mol_mem
		form_body() {
			return [
				this.Group( 'main' ),
				... this.value_str( 'type' ) ? [ this.Content_field( 'content' ) ] : [],
			]
		}
		
		@ $mol_mem
		group( name: string ) {
			switch( name ) {
				case 'main': return [
					this.Title_field( 'title' ),
					this.Type_field( 'type' ),
				]
				default: return []
			}
		}
		
		@ $mol_mem_key
		bid_required( field: Field ) {
			return this.value_str( field ) ? '' : super.bid_required( field )
		}
		
		@ $mol_mem_key
		bid_short( field: Field ) {
			return this.value_str( field ).length > 5 ? '' : super.bid_short( field )
		}
		
		@ $mol_mem_key
		bid_long( field: Field ) {
			return this.value_str( field ).length > 100 ? '' : super.bid_long( field )
		}
		
		@ $mol_mem_key
		bid_swearing( field: Field ) {
			return /\bfuck/.test( this.value_str( field ) ) ?  super.bid_swearing( field ) : ''
		}
		
		@ $mol_mem
		changed() {
			
			const model = this.model()
			
			for( const field of [ 'title', 'type', 'content' ] as const ) {
				if( model[ field ]() === this.value_str( field ) ) continue
				return true
			}
			
			return false
		}
		
		submit_allowed() {
			return this.changed() && super.submit_allowed()
		}
		
		@ $mol_action
		submit( next? : Event ) {
			
			const model = this.model()
			
			for( const field of [ 'title', 'type', 'content' ] as const ) {
				model[ field ]( this.value_str( field ) )
				this.value_str( field, null )
			}
			
			this.result( this.message_done() )
			
		}
		
		@ $mol_mem
		result( next = '' ) {
			this.changed()
			return next
		}
		
	}
}