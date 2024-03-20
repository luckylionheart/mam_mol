declare namespace $ {

	type $mol_link_source__uri__80QG6EQD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_list__rows__TC0EQX78 = $mol_type_enforce<
		ReturnType< $mol_app_questions['menu_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_link__uri__XOOM0OHX = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_permalink'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__47T0BQOR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__sub__UF27IJS2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__ZTG9VHR6 = $mol_type_enforce<
		({ 
			'question': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_text__text__HVU2KZ07 = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_descr'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__M4AZEJYG = $mol_type_enforce<
		ReturnType< $mol_app_questions['answers'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub__QLA4YKID = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__MSMFFGY0 = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_tags_by_index'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__title__04I6LYSD = $mol_type_enforce<
		ReturnType< $mol_app_questions['title_default'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__KGNTN0YE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__BQKZNIOQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__F2Y86G7F = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__THBD4YUT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__4BWN0RXK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_text__text__06CO8UV4 = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_answer'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_link__minimal_width__YMQDRMMP = $mol_type_enforce<
		number
		,
		ReturnType< $mol_link['minimal_width'] >
	>
	type $mol_link__minimal_height__QIJF4WTR = $mol_type_enforce<
		number
		,
		ReturnType< $mol_link['minimal_height'] >
	>
	type $mol_link__arg__LT4YMEE5 = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_arg_by_index'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__IZH8SATU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub__TF7N8OH4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_app_questions extends $mol_book2 {
		Themme( ): $mol_theme_auto
		title_default( ): string
		Lights( ): $mol_lights_toggle
		Source_link( ): $mol_link_source
		menu_rows( ): readonly(any)[]
		Menu_links( ): $mol_list
		question_title( id: any): string
		question_permalink( id: any): string
		Details_permalink_icon( id: any): $mol_icon_external
		Details_permalink( id: any): $mol_link
		Details_close_icon( id: any): $mol_icon_cross
		Details_close( id: any): $mol_link
		question_descr( id: any): string
		Details_descr( id: any): $mol_text
		answers( id: any): readonly(any)[]
		Answers( id: any): $mol_list
		question_answer( id: any): string
		question_arg_by_index( id: any): Record<string, any>
		question_title_by_index( id: any): string
		Question_title( id: any): $mol_view
		question_tags_by_index( id: any): readonly(any)[]
		Question_tags( id: any): $mol_view
		tag_name( id: any): string
		plugins( ): readonly(any)[]
		Menu( ): $mol_page
		Details( id: any): $mol_page
		Answer( id: any): $mol_text
		Question_link( id: any): $mol_link
		Tag( id: any): $mol_view
	}
	
}

//# sourceMappingURL=questions.view.tree.d.ts.map