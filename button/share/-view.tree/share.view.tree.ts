namespace $ {
	export class $mol_button_share extends $mol_button_minor {
		
		/**
		 * ```tree
		 * uri \
		 * ```
		 */
		uri() {
			return ""
		}
		
		/**
		 * ```tree
		 * capture null
		 * ```
		 */
		capture() {
			return null as any
		}
		
		/**
		 * ```tree
		 * hint @ \Share
		 * ```
		 */
		hint() {
			return this.$.$mol_locale.text( '$mol_button_share_hint' )
		}
		
		/**
		 * ```tree
		 * sub / <= Icon
		 * ```
		 */
		sub() {
			return [
				this.Icon()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Icon $mol_icon_share_variant
		 * ```
		 */
		@ $mol_mem
		Icon() {
			const obj = new this.$.$mol_icon_share_variant()
			
			return obj
		}
	}
	
}
