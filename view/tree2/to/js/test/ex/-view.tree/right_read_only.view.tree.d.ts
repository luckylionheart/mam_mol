declare namespace $ {

	export class $mol_view_tree2_to_js_test_ex_right_read_only_foo extends $mol_object {
		a( id: any, next?: any ): any
	}
	
	type $mol_view_tree2_to_js_test_ex_right_read_only_bar_b__PX1ZAVP3 = $mol_type_enforce<
		Parameters< $mol_view_tree2_to_js_test_ex_right_read_only_bar['b'] >[0]
		,
		Parameters< ReturnType< $mol_view_tree2_to_js_test_ex_right_read_only_bar['Obj'] >['a'] >[0]
	>
	type $mol_view_tree2_to_js_test_ex_right_read_only_bar_b__P6XJDU3X = $mol_type_enforce<
		Parameters< $mol_view_tree2_to_js_test_ex_right_read_only_bar['b'] >[1]
		,
		Parameters< ReturnType< $mol_view_tree2_to_js_test_ex_right_read_only_bar['Obj'] >['a'] >[1]
	>
	export class $mol_view_tree2_to_js_test_ex_right_read_only_bar extends $mol_object {
		Obj( ): $mol_view_tree2_to_js_test_ex_right_read_only_foo
		b( id: any, next?: ReturnType< ReturnType< $mol_view_tree2_to_js_test_ex_right_read_only_bar['Obj'] >['a'] > ): ReturnType< ReturnType< $mol_view_tree2_to_js_test_ex_right_read_only_bar['Obj'] >['a'] >
	}
	
}

//# sourceMappingURL=right_read_only.view.tree.d.ts.map