	($.$mol_portion_indicator) = class $mol_portion_indicator extends ($.$mol_view) {
		width_style(){
			return "0";
		}
		style(){
			return {...(super.style()), "width": (this.width_style())};
		}
	};
	($.$mol_portion) = class $mol_portion extends ($.$mol_view) {
		indicator_width_style(){
			return "0";
		}
		Indicator(){
			const obj = new this.$.$mol_portion_indicator();
			(obj.width_style) = () => ((this.indicator_width_style()));
			return obj;
		}
		portion(){
			return 0;
		}
		sub(){
			return [(this.Indicator())];
		}
	};
	($mol_mem(($.$mol_portion.prototype), "Indicator"));

//# sourceMappingURL=portion.view.tree.js.map