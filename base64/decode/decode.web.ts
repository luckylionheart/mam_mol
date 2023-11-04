namespace $ {

	export function $mol_base64_decode_web(base64Str: string): Uint8Array {
		base64Str = base64Str.replace( /-/g, '+' ).replace( /_/g, '/' )
		return new Uint8Array($mol_dom_context.atob(base64Str).split('').map(c => c.charCodeAt(0)))
	}

	$.$mol_base64_decode = $mol_base64_decode_web
}
