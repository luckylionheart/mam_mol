declare namespace $ {

	type $mol_card__title__RVTDKP2I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__UV0BS5PY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__504TCSUC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__V0H80LK2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__5C4KEP6Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__JRRAOTDU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__H7MIOT3M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__4KL5R091 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__JJBHMGUI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__Content__9IAAB7RQ = $mol_type_enforce<
		ReturnType< $mol_deck_demo['Spam_content'] >
		,
		ReturnType< $mol_card['Content'] >
	>
	type $mol_deck__items__FOKA62R4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_deck['items'] >
	>
	export class $mol_deck_demo extends $mol_example_small {
		Greeting( ): $mol_card
		Question( ): $mol_card
		Answer( ): $mol_card
		Command( ): $mol_card
		Spam_content( ): $mol_filler
		Spam( ): $mol_card
		Deck( ): $mol_deck
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map