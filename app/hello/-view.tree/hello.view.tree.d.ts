declare namespace $ {

	type $mol_string__hint__D2G1BJ26 = $mol_type_enforce<
		ReturnType< $mol_app_hello['name_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__FNV8LFMJ = $mol_type_enforce<
		ReturnType< $mol_app_hello['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_view__sub__R227040U = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_app_hello extends $mol_view {
		sub( ): readonly(any)[]
		name_hint( ): string
		name( next?: string ): string
		Name( ): $mol_string
		greeting( ): string
		Greeting( ): $mol_view
	}
	
}

//# sourceMappingURL=hello.view.tree.d.ts.map