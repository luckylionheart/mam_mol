declare namespace $ {

	type $mol_card__content__4Z3Z3A7K = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__T4HGVS69 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__status__GE3L2Z7G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['status'] >
	>
	export class $mol_card_demo extends $mol_example_small {
		Simple( ): $mol_card
		Pending( ): $mol_card
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map