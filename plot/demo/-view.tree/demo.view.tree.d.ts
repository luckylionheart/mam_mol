declare namespace $ {

	type $mol_plot_line__type__A7GDV3T0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['type'] >
	>
	type $mol_plot_group__series_y__OFLMYKH5 = $mol_type_enforce<
		ReturnType< $mol_plot_demo['saturation_series'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__1Y469T4A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_group__series_y__I6Q89ENW = $mol_type_enforce<
		ReturnType< $mol_plot_demo['input_series'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__27DD4DMT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_bar__series_y__GCLRKQG8 = $mol_type_enforce<
		ReturnType< $mol_plot_demo['output_series'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_ruler_vert__title__SOWJROMY = $mol_type_enforce<
		ReturnType< $mol_plot_demo['Voltage_title'] >
		,
		ReturnType< $mol_plot_ruler_vert['title'] >
	>
	type $mol_plot_ruler_hor__title__M4ZE02AF = $mol_type_enforce<
		ReturnType< $mol_plot_demo['Time_title'] >
		,
		ReturnType< $mol_plot_ruler_hor['title'] >
	>
	type $mol_plot_pane__graphs__1T38F08E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	export class $mol_plot_demo extends $mol_example_large {
		saturation_series( ): readonly(any)[]
		Saturation_fill( ): $mol_plot_fill
		Saturation_line( ): $mol_plot_line
		Saturation( ): $mol_plot_group
		input_series( ): readonly(any)[]
		Input_line( ): $mol_plot_line
		Input_dots( ): $mol_plot_dot
		Input( ): $mol_plot_group
		output_series( ): readonly(any)[]
		Output( ): $mol_plot_bar
		Voltage_title( ): string
		Voltage( ): $mol_plot_ruler_vert
		Time_title( ): string
		Time( ): $mol_plot_ruler_hor
		Plot( ): $mol_plot_pane
		title( ): string
		count( next?: number ): number
		frequency( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map