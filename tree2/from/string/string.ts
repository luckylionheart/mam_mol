namespace $ {

	/** Parses tree format from string. */
	export function $mol_tree2_from_string(
		this: $,
		str : string,
		span = $mol_span.unknown,
	) : $mol_tree2 {

		var root = $mol_tree2.list( [], span )
		var stack = [ root ]

		var pos = 0, row = 0, min_indent = 0
		
		while( str.length > pos ) {

			var indent = 0
			var line_start = pos

			row++

			// read indent
			while( str.length > pos && str[ pos ] == '\t' ) {
				indent++
				pos++
			}

			if( ! root.kids.length ) {
				min_indent = indent
			}

			indent -= min_indent

			// invalid tab size
			if( indent < 0 || indent >= stack.length ) {

				const sp = span.span( row, 1, pos - line_start )

				if( indent < 0 ) {
					if( str.length > pos ) {
						this.$mol_fail( new SyntaxError( `Too few tabs\n${sp}` ) )
					}
				} else {
					this.$mol_fail( new SyntaxError( `Too many tabs\n${sp}` ) )
				}

				// skip error line
				while( str.length > pos && str[ pos ] != '\n' ) {
					pos++
				}

			}

			stack.length = indent + 1
			var parent = stack[ indent ]

			// parse types
			while( str.length > pos && str[ pos ] != '\\' && str[ pos ] != '\n' ) {

				// type can not contain space and tab
				var error_start = pos
				while( str.length > pos && ( str[ pos ] == ' ' || str[ pos ] == '\t' ) ) {
					pos++
				}

				if( pos > error_start ) {
					const end = str.indexOf( '\n' , pos )
					const sp = span.span( row, error_start - line_start, pos - error_start + 1 )
					this.$mol_fail( new SyntaxError( `Wrong nodes separator\n${sp}` ) )
				}

				// read type
				var type_start = pos
				while( 
					str.length > pos && 
					str[ pos ] != '\\' && 
					str[ pos ] != ' ' && 
					str[ pos ] != '\t' && 
					str[ pos ] != '\n'
				) {
					pos++
				}
				if( pos > type_start ) {
					let next = new $mol_tree2(
						str.slice( type_start , pos ),
						'',
						[],
						span.span( row, type_start - line_start, pos - type_start ),
					)
					const parent_kids = parent.kids as $mol_tree2[]
					parent_kids.push( next )
					parent = next
				}

				// read one space if exists
				if( str.length > pos && str[ pos ] == ' ' ) {
					pos++
				}
			}

			// read data
			if( str.length > pos && str[ pos ] == '\\' ) {
				var data_start = pos
				while( str.length > pos && str[ pos ] != '\n' ) {
					pos++
				}
				let next = new $mol_tree2(
					'',
					str.slice( data_start + 1 , pos ),
					[],
					span.span( row, data_start - line_start, pos - data_start - 1 ),
				)
				const parent_kids = parent.kids as $mol_tree2[]
				parent_kids.push( next )
				parent = next
			}

			// now must be end of text
			if( str.length === pos && stack.length > 0 ) {
				const sp = span.span( row, pos - line_start + 1, 0 )
				this.$mol_fail( new SyntaxError( `Undexpected EOF, LF required\n${sp}` ) )
			}

			stack.push( parent )
			pos++
		}

		return root
	}

}
