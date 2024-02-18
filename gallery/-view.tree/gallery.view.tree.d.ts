declare namespace $ {

	type $mol_gallery__style__W0NSD5T5 = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items__6YEI42QF = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map