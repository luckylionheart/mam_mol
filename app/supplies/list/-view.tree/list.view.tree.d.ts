declare namespace $ {

	type $mol_app_supplies_card__supply__9931ZQ4Q = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['supply'] >
		,
		ReturnType< $mol_app_supplies_card['supply'] >
	>
	type $mol_app_supplies_card__arg__XD7Z53JR = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['supply_arg'] >
		,
		ReturnType< $mol_app_supplies_card['arg'] >
	>
	type $mol_code__hint__D8Q4MSMY = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['search_hint'] >
		,
		ReturnType< $mol_code['hint'] >
	>
	type $mol_code__value__94WKCXW7 = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['search_query'] >
		,
		ReturnType< $mol_code['value'] >
	>
	type $mol_list__rows__F43272M2 = $mol_type_enforce<
		ReturnType< $mol_app_supplies_list['supply_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_app_supplies_list extends $mol_page {
		supplies( ): readonly($mol_app_supplies_domain_supply)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		Supply_row( id: any): $mol_app_supplies_card
		search_hint( ): string
		search_query( next?: string ): string
		Search( ): $mol_code
		supply_rows( ): readonly($mol_view)[]
		Supply_rows( ): $mol_list
		supply( id: any): any
		supply_id( id: any): string
		supply_arg( id: any): ({ 
			'supply': ReturnType< $mol_app_supplies_list['supply_id'] >,
		}) 
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map