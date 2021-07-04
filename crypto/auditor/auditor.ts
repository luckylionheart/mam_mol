namespace $ {
	
	const algorithm = {
		name: 'RSA-PSS',
		modulusLength: 256,
		publicExponent: new Uint8Array([ 1, 0, 1 ]),
		hash: 'SHA-1',
		saltLength: 8,
	}
	
	/** Asymmetric signing pair with shortest payload */
	export async function $mol_crypto_auditor_pair( this: $ ) {
		
		const pair = await $.crypto.subtle.generateKey(
			algorithm,
			true,
			[ 'sign', 'verify' ]
		)
		
		return {
			
			public: new $mol_crypto_auditor_public(
				pair.publicKey as CryptoKey & { type: 'public' }
			),
			
			private: new $mol_crypto_auditor_private(
				pair.privateKey as CryptoKey & { type: 'private' }
			),
			
		}
		
	}
	
	/** Asymmetric signing public key wrapper with shortest payload */
	export class $mol_crypto_auditor_public extends Object {
		
		constructor(
			readonly native: CryptoKey & { type: 'public' }
		) {
			super()
		}
		
		static async from( serial: DataView | ArrayBuffer ) {
			return new this(
				await crypto.subtle.importKey(
					'spki',
					serial,
					algorithm,
					true,
					[ 'verify' ],
				) as CryptoKey & { type: 'public' }
			)
		}
		
		/** 62 byte */
		async serial() {
			return await crypto.subtle.exportKey(
				'spki',
				this.native,
			)
		}
		
		async verify( data: DataView | ArrayBuffer, sign: DataView | ArrayBuffer ) {
			return await crypto.subtle.verify(
				algorithm,
				this.native,
				sign,
				data,
			)
		}
		
	}
	
	/** Asymmetric signing private key wrapper with shortest payload */
	export class $mol_crypto_auditor_private extends Object {
		
		constructor(
			readonly native: CryptoKey & { type: 'private' }
		) {
			super()
		}
	
		static async from( serial: DataView | ArrayBuffer ) {
			return new this(
				await crypto.subtle.importKey(
					'pkcs8',
					serial,
					algorithm,
					true,
					[ 'sign' ],
				) as CryptoKey & { type: 'private' }
			)
		}
		
		/** ~195 bytes */
		async serial() {
			return await crypto.subtle.exportKey(
				'pkcs8',
				this.native,
			)
		}
		
		/** 32 byte */
		async sign( data: DataView | ArrayBuffer ) {
			
			return await crypto.subtle.sign(
				algorithm,
				this.native,
				data
			)
			
		}
		
	}
	
}
