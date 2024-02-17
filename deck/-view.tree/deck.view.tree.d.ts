declare namespace $ {

	type $mol_switch__value__EI8LM1JD = $mol_type_enforce<
		ReturnType< $mol_deck['current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__MUAE1OV3 = $mol_type_enforce<
		ReturnType< $mol_deck['switch_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	export class $mol_deck extends $mol_list {
		items( ): readonly($mol_view)[]
		rows( ): readonly($mol_view)[]
		current( next?: string ): string
		switch_options( ): Record<string, any>
		Switch( ): $mol_switch
		Content( ): $mol_view
	}
	
}

//# sourceMappingURL=deck.view.tree.d.ts.map