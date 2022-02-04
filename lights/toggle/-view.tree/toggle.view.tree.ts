namespace $ {
	export class $mol_lights_toggle extends $mol_check_icon {
		
		/**
		 * ```tree
		 * Icon <= Lights_icon
		 * ```
		 */
		Icon() {
			return this.Lights_icon()
		}
		
		/**
		 * ```tree
		 * hint @ \Toggle lights
		 * ```
		 */
		hint() {
			return this.$.$mol_locale.text( '$mol_lights_toggle_hint' )
		}
		
		/**
		 * ```tree
		 * checked?val <=> lights?val
		 * ```
		 */
		checked(val?: any) {
			return this.lights(val)
		}
		
		/**
		 * ```tree
		 * Lights_icon $mol_icon_brightness_6
		 * ```
		 */
		@ $mol_mem
		Lights_icon() {
			const obj = new this.$.$mol_icon_brightness_6()
			
			return obj
		}
		
		/**
		 * ```tree
		 * lights?val false
		 * ```
		 */
		@ $mol_mem
		lights(val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
	}
	
}
