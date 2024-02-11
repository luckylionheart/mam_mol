declare namespace $ {

	type $mol_section__title__0FY0GEGQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__JQQCF09Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	export class $mol_section_demo extends $mol_example_small {
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
		Section_content( ): $mol_filler
		Section( ): $mol_section
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map