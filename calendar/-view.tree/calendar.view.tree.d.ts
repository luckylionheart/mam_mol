declare namespace $ {

	type $mol_calendar_day__holiday__Y6JN7HBL = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub__OHZ2H35V = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub__TW43W6T7 = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost__4BE0TCUC = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday__AVK2983X = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected__6TKYG9V5 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today__HSE3OJDW = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme__59ELXZB6 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub__8YMSVPU4 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_view__minimal_height__M1UXPM4S = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__PJ892XFQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__9B33HLBY = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub__6EZHT4JT = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
	}
	
	export class $mol_calendar_day extends $mol_view {
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map