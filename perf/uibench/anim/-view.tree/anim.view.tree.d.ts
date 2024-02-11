declare namespace $ {

	type $mol_perf_uibench_anim_box__state__ICOV5HVW = $mol_type_enforce<
		ReturnType< $mol_perf_uibench_anim['box_state'] >
		,
		ReturnType< $mol_perf_uibench_anim_box['state'] >
	>
	export class $mol_perf_uibench_anim extends $mol_view {
		state( ): any
		attr_static( ): ({ 
			'class': string,
		})  & ReturnType< $mol_view['attr_static'] >
		sub( ): ReturnType< $mol_perf_uibench_anim['boxes'] >
		Box( id: any): $mol_perf_uibench_anim_box
		boxes( ): readonly(any)[]
		box_state( id: any): any
	}
	
	export class $mol_perf_uibench_anim_box extends $mol_view {
		state( ): any
		attr( ): ({ 
			'class': string,
			'data-id': ReturnType< $mol_perf_uibench_anim_box['id'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'borderRadius': ReturnType< $mol_perf_uibench_anim_box['style_radius'] >,
			'background': ReturnType< $mol_perf_uibench_anim_box['style_color'] >,
		})  & ReturnType< $mol_view['style'] >
		id( ): string
		style_radius( ): string
		style_color( ): string
	}
	
}

//# sourceMappingURL=anim.view.tree.d.ts.map