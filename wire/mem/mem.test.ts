namespace $ {
	$mol_test({
		
		// https://github.com/nin-jin/slides/tree/master/reactivity#component-states
		'Cached channel' ($) {

			class App extends $mol_object2 {

				static $ = $
				
				@ $mol_wire_mem(0)
				static value( next = 1 ) {
					return next + 1
				}
				
				@ $mol_wire_method
				static test() {
					
					$mol_assert_equal( App.value() , 2 )
		
					App.value( 2 )
					$mol_assert_equal( App.value() , 3 )
					
				}

			}
			
			App.test()
		},

		'Mem overrides mem' ($) {

			class Base extends $mol_object2 {

				static $ = $
				
				@ $mol_wire_mem(0)
				static value( next = 1 ) {
					return next + 1
				}
				
			}
			
			class Middle extends Base {
				
				@ $mol_wire_mem(0)
				static value( next?: number ) {
					return super.value( next ) + 1
				}
			
			}
				
			class App extends Middle {
				
				@ $mol_wire_mem(0)
				static value( next?: number ) {
					return super.value( next ) * 3
				}
				
				@ $mol_wire_method
				static test() {
					
					$mol_assert_equal( this.value() , 9 )
		
					$mol_assert_equal( this.value( 5 ) , 21 )
					$mol_assert_equal( this.value() , 21 )
					
				}

			}
			
			App.test()
		},

		// https://github.com/nin-jin/slides/tree/master/reactivity#wish--constant-consistency-of-states
		'Auto recalculation of cached values'( $ ) {
			
			class App extends $mol_object2 {

				static $ = $
				
				@ $mol_wire_mem(0)
				static xxx( next? : number ) {
					return next || 1
				}

				@ $mol_wire_mem(0)
				static yyy() {
					return this.xxx() + 1
				}

				@ $mol_wire_mem(0)
				static zzz() {
					return this.yyy() + 1
				}

				@ $mol_wire_method
				static test() {
					
					$mol_assert_equal( App.yyy() , 2 )
					$mol_assert_equal( App.zzz() , 3 )
		
					App.xxx( 5 )
					$mol_assert_equal( App.zzz() , 7 )
					
				}
				
			}
			
			App.test()
		},

		// https://github.com/nin-jin/slides/tree/master/reactivity#wish--only-necessary-calculations
		'Skip recalculation when actually no dependency changes'( $ ) {
			
			const log = [] as string[]
			
			class App extends $mol_object2 {

				static $ = $
				
				@ $mol_wire_mem(0)
				static xxx( next? : number ) {
					log.push( 'xxx' )
					return next || 1
				}
				
				@ $mol_wire_mem(0)
				static yyy() {
					log.push( 'yyy' )
					return [ Math.sign( this.xxx() ) ]
				}
				
				@ $mol_wire_mem(0)
				static zzz() {
					log.push( 'zzz' )
					return this.yyy()[0] + 1
				}

				@ $mol_wire_method
				static test() {
					
					App.zzz()
					$mol_assert_like( log , [ 'zzz', 'yyy', 'xxx' ] )
					
					App.xxx( 5 )
					App.zzz()
					$mol_assert_like( log , [ 'zzz', 'yyy', 'xxx', 'xxx', 'yyy' ] )
					
				}
				
			}
			
			App.test()
		},

		// https://github.com/nin-jin/slides/tree/master/reactivity#flow-auto
		'Flow: Auto'( $ ) {

			class App extends $mol_object2 {
				
				static get $() { return $ }

				@ $mol_wire_mem(0)
				static first( next = 1 ) { return next }
				
				@ $mol_wire_mem(0)
				static second( next = 2 ) { return next }
				
				@ $mol_wire_mem(0)
				static condition( next = true ) { return next }
				
				static counter = 0

				@ $mol_wire_mem(0)
				static result() {
					const res = this.condition() ? this.first() : this.second() 
					return res + this.counter ++
				}
				
			}

			$mol_assert_equal( App.result() , 1 )
			$mol_assert_equal( App.counter , 1 )
			
			App.condition( false )
			$mol_assert_equal( App.result() , 3 )
			$mol_assert_equal( App.counter , 2 )

			App.first( 10 )
			$mol_assert_equal( App.result() , 3 )
			$mol_assert_equal( App.counter , 2 )

		} ,

		// https://github.com/nin-jin/slides/tree/master/reactivity#dupes-equality
		'Dupes: Equality'( $ ) {
			
			let counter = 0
			
			class App extends $mol_object2 {

				static $ = $
				
				@ $mol_wire_mem(0)
				static foo( next? : { numbs: number[] } ) {
					return next ?? { numbs: [ 1 ] }
				}

				@ $mol_wire_mem(0)
				static bar() {
					return { ... this.foo(), count: ++ counter }
				}

				@ $mol_wire_method
				static test() {
					
					$mol_assert_like( App.bar() , { numbs: [ 1 ], count: 1 } )
		
					App.foo({ numbs: [ 1 ] })
					$mol_assert_like( App.bar() , { numbs: [ 1 ], count: 1 } )
					
					App.foo({ numbs: [ 2 ] })
					$mol_assert_like( App.bar() , { numbs: [ 2 ], count: 2 } )
					
				}
				
			}
			
			App.test()
		},

		// https://github.com/nin-jin/slides/tree/master/reactivity#cycle-fail
		'Cycle: Fail'( $ ) {
		
			class App extends $mol_object2 {
		
				static $ = $
				
				@ $mol_wire_mem(0)
				static foo() : number {
					return this.bar() + 1
				}
		
				@ $mol_wire_mem(0)
				static bar() : number {
					return this.foo() + 1
				}
		
				@ $mol_wire_method
				static test() {
					$mol_assert_fail( ()=> App.foo(), 'Circular subscription' )
				}	
				
			}
			
			App.test()
		} ,

		// https://github.com/nin-jin/slides/tree/master/reactivity#wish--stable-behavior
		'Different order of pull and push'( $ ) {
		
			class App extends $mol_object2 {
		
				static $ = $
				
				@ $mol_wire_mem(0)
				static store( next = 0 ) {
					return next
				}
		
				@ $mol_wire_mem(0)
				static fast( next?: number ) {
					return this.store( next )
				}
		
				@ $mol_wire_mem(0)
				static slow( next?: number ) {
					return this.store( next )
				}
		
				@ $mol_wire_method
				static test() {
					
					App.fast()
					$mol_assert_equal( App.slow( 666 ) , 666 )
					$mol_assert_equal( App.fast(), App.slow(), 666 )
					
					App.store( 777 )
					$mol_assert_equal( App.fast(), App.slow(), 777 )

				}	
				
			}
			
			App.test()
		} ,
		
		// https://github.com/nin-jin/slides/tree/master/reactivity#wish--stable-behavior
		'Actions inside invariant'( $ ) {
		
			class App extends $mol_object2 {
		
				static $ = $
				
				@ $mol_wire_mem(0)
				static count( next = 0 ) {
					return next
				}
		
				@ $mol_wire_mem(0)
				static count2() {
					return this.count()
				}
		
				@ $mol_wire_mem(0)
				static res() {
					const count = this.count2()
					if( !count ) this.count( count + 1 )
					return count + 1
				}
		
				@ $mol_wire_method
				static test() {
					
					$mol_assert_like( App.res() , 1 )
					
					App.count( 5 )
					$mol_assert_like( App.res() , 6 )
					
				}
				
			}
			
			App.test()
		} ,

		async 'Wait for data'($) {

			class App extends $mol_object2 {

				static $ = $
				
				static async source() {
					return 'Jin'
				}

				@ $mol_wire_mem(0)
				static middle() {
					return $mol_wire_sync( this ).source()
				}

				@ $mol_wire_mem(0)
				static target() {
					return this.middle()
				}
				
				@ $mol_wire_method
				static test() {
					$mol_assert_equal( App.target() , 'Jin' )
				}

			}

			await $mol_wire_async( App ).test()
		},

		'Auto destroy on long alone'( $ ) {

			let destroyed = false

			class App extends $mol_object2 {

				static $ = $
				
				@ $mol_wire_mem(0)
				static showing( next = true ) {
					return next
				}

				@ $mol_wire_mem(0)
				static details() {
					return {
						destructor() {
							destroyed = true
						}
					}
				}

				@ $mol_wire_mem(0)
				static render() {
					return this.showing() ? this.details() : null
				}

			}

			const details = App.render()
			$mol_assert_ok( details )

			App.showing( false )
			$mol_assert_not( App.render() )
			
			App.showing( true )
			$mol_assert_equal( App.render() , details )
			
			$mol_wire_fiber.sync()
			$mol_assert_not( destroyed )
			
			App.showing( false )
			$mol_wire_fiber.sync()
			$mol_assert_ok( destroyed )

			App.showing( true )
			$mol_assert_unique( App.render() , details )
			
		},

		'Memoize by single simple key' ($) {

			class Team extends $mol_object2 {

				static $ = $

				@ $mol_wire_mem(1)
				static user_name( user: string , next?: string ) {
					return next ?? user
				}

				@ $mol_wire_mem(1)
				static user_names() {
					return [
						this.user_name( 'jin' ),
						this.user_name( 'john' ),
					]
				}

				@ $mol_wire_method
				static test() {
				
					$mol_assert_like( this.user_names(), [ 'jin', 'john' ] )
					
					Team.user_name( 'jin', 'JIN' )
					$mol_assert_like( this.user_names(), [ 'JIN', 'john' ] )
					
				}
				
			}

			Team.test()
		} ,

		'Memoize by single complex key' ($) {

			class Map extends $mol_object2 {

				static $ = $

				@ $mol_wire_mem(1)
				static tile( pos: [ number, number ] ) {
					return new String( `/tile=${pos}` )
				}

				@ $mol_wire_method
				static test() {
					
					$mol_assert_like( this.tile([0,1]), new String( '/tile=0,1' ) )
					$mol_assert_equal( this.tile([0,1]), this.tile([0,1]) )
					
				}
				
			}

			Map.test()
		} ,

		'Memoize by multiple keys' ($) {

			class Map extends $mol_object2 {

				static $ = $

				@ $mol_wire_mem(2)
				static tile( x: number, y: number ) {
					return new String( `/tile=${x},${y}` )
				}

				@ $mol_wire_method
				static test() {
					
					$mol_assert_like( this.tile(0,1), new String( '/tile=0,1' ) )
					$mol_assert_equal( this.tile(0,1), this.tile(0,1) )
					
				}
				
			}

			Map.test()
		} ,

		'Owned value has js-path name' () {

			class App extends $mol_object2 {

				@ $mol_wire_mem(0)
				static title() {
					return new $mol_object2
				}

				@ $mol_wire_mem(1)
				static like( friend: number ) {
					return new $mol_object2
				}

				@ $mol_wire_mem(2)
				static relation( friend: number, props: [ number ] ) {
					return new $mol_object2
				}

			}

			$mol_assert_equal( `${ App.title() }` , 'App.title()' )
			$mol_assert_equal( `${ App.like(123) }` , 'App.like(123)' )
			$mol_assert_equal( `${ App.relation(123,[456]) }` , 'App.relation(123,[456])' )

		} ,

		'Deep deps' ($) {

			class Fib extends $mol_object2 {

				static $ = $
				
				static sums = 0

				@ $mol_wire_mem(1)
				static value( index: number , next?: number ): number {
					if( next ) return next
					if( index < 2 ) return 1
					++ this.sums
					return this.value( index - 1 ) + this.value( index - 2 )
				}

				@ $mol_wire_method
				static test() {
					
					$mol_assert_equal( this.value( 4 ), 5 )
					$mol_assert_equal( this.sums, 3 )
					
					this.value( 1, 2 )
					$mol_assert_equal( this.value( 4 ), 8 )
					$mol_assert_equal( this.sums, 6 )
							
				}

			}
			
			Fib.test()
		} ,

		'Unsubscribe from temp pubs on complete' ($) {

			class Random extends $mol_object2 {

				static $ = $

				@ $mol_wire_method
				static seed() {
					return Math.random()
				}
				
				@ $mol_wire_mem(0)
				static resets( next?: null ) {
					return Math.random()
				}
				
				@ $mol_wire_mem(0)
				static value() {
					this.resets()
					return this.seed()
				}

				@ $mol_wire_method
				static test() {
					
					const first = this.value()
			
					this.resets( null )
					const second = this.value()
		
					$mol_assert_unique( first, second )
									
				}

			}
			
			Random.test()
		} ,

	})
}
