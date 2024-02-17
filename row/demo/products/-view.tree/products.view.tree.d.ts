declare namespace $ {

	type $mol_card__minimal_width__VNZMACHB = $mol_type_enforce<
		number
		,
		ReturnType< $mol_card['minimal_width'] >
	>
	type $mol_card__minimal_height__XR4I47K6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_card['minimal_height'] >
	>
	type $mol_card__title__BJRL6U1O = $mol_type_enforce<
		ReturnType< $mol_row_demo_products['product_title'] >
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_row__sub__IV48SZCN = $mol_type_enforce<
		ReturnType< $mol_row_demo_products['products'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_row_demo_products extends $mol_example {
		title( ): string
		count( ): number
		Product( id: any): $mol_card
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
		product_title( id: any): string
		products( ): readonly(any)[]
		Products( ): $mol_row
	}
	
}

//# sourceMappingURL=products.view.tree.d.ts.map