declare namespace $ {

	type $mol_vector_range__3OGXJ60W = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__JT33T71V = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__VWFTLI7W = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__F9SOGE7I = $mol_type_enforce<
		[ ReturnType< $mol_map_yandex_mark['box_lat'] >, ReturnType< $mol_map_yandex_mark['box_lon'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_map_yandex_mark extends $mol_object {
		box_lat( ): $mol_vector_range<number>
		box_lon( ): $mol_vector_range<number>
		address( ): string
		pos( ): $mol_vector_2d<number>
		box( ): $mol_vector_2d<$mol_vector_range<number>>
		hint( ): string
		title( ): ReturnType< $mol_map_yandex_mark['address'] >
		content( ): string
		object( ): any
	}
	
}

//# sourceMappingURL=mark.view.tree.d.ts.map