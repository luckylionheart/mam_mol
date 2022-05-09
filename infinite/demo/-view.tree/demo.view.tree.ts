namespace $ {
	export class $mol_infinite_demo extends $mol_example {
		
		/**
		 * ```tree
		 * title \Infinite list demo
		 * ```
		 */
		title() {
			return "Infinite list demo"
		}
		
		/**
		 * ```tree
		 * chunk_size 20
		 * ```
		 */
		chunk_size() {
			return 20
		}
		
		/**
		 * ```tree
		 * sub / <= List
		 * ```
		 */
		sub() {
			return [
				this.List()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\$mol_filler
		 * 	\infinite
		 * 	\scroll
		 * 	\virtual
		 * 	\container
		 * ```
		 */
		tags() {
			return [
				"$mol_filler",
				"infinite",
				"scroll",
				"virtual",
				"container"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * after* /
		 * ```
		 */
		after(id: any) {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Item* $mol_filler
		 * ```
		 */
		@ $mol_mem_key
		Item(id: any) {
			const obj = new this.$.$mol_filler()
			
			return obj
		}
		
		/**
		 * ```tree
		 * List $mol_infinite
		 * 	after* <= after*
		 * 	Row* <= Item*
		 * ```
		 */
		@ $mol_mem
		List() {
			const obj = new this.$.$mol_infinite()
			
			obj.after = (id: any) => this.after(id)
			obj.Row = (id: any) => this.Item(id)
			
			return obj
		}
	}
	
}
