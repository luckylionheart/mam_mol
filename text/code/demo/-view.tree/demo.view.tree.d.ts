declare namespace $ {

	type $mol_text_code__sidebar_showed__GOCDV85E = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__text__GKJ1UKOD = $mol_type_enforce<
		ReturnType< $mol_text_code_demo['source'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__syntax__ERL347LY = $mol_type_enforce<
		ReturnType< $mol_text_code_demo['syntax'] >
		,
		ReturnType< $mol_text_code['syntax'] >
	>
	type $mol_text_code__uri_resolve__KCLAYK0U = $mol_type_enforce<
		ReturnType< $mol_text_code_demo['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	export class $mol_text_code_demo extends $mol_example_small {
		source( ): string
		syntax( ): any
		uri_resolve( id: any): string
		Text( ): $mol_text_code
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map