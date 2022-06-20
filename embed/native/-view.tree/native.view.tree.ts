namespace $ {
	export class $mol_embed_native extends $mol_scroll {
		
		/**
		 * ```tree
		 * uri?val \
		 * ```
		 */
		@ $mol_mem
		uri(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * dom_name \object
		 * ```
		 */
		dom_name() {
			return "object"
		}
		
		/**
		 * ```tree
		 * window null
		 * ```
		 */
		window() {
			return null as any
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	data <= uri
		 * 	type <= mime
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				data: this.uri(),
				type: this.mime()
			}
		}
		
		/**
		 * ```tree
		 * sub / <= Fallback
		 * ```
		 */
		sub() {
			return [
				this.Fallback()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * mime \
		 * ```
		 */
		mime() {
			return ""
		}
		
		/**
		 * ```tree
		 * title \
		 * ```
		 */
		title() {
			return ""
		}
		
		/**
		 * ```tree
		 * Fallback $mol_link
		 * 	uri <= uri
		 * 	sub / <= title
		 * ```
		 */
		@ $mol_mem
		Fallback() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => this.uri()
			obj.sub = () => [
				this.title()
			] as readonly any[]
			
			return obj
		}
	}
	
}

