import { H3Event } from 'h3'

export const createRequestHeaders = (event: H3Event): ObjectAny => {
	const config = useRuntimeConfig()
	const header = <ObjectAny>{}
	let authorization = event.node.req.headers.authorization
	let mfaSource = event.node.req.headers['finno-mfa-source']
	let contentType = getHeader(event, 'content-type')
	let cookie = getHeader(event, 'cookie')
	// const finnoUserId = process.env.FINNO_USER_ID
	// if (finnoUserId) {
	// 	header['Finno-User-Id'] = finnoUserId
	// }
	if (!authorization) {
		authorization = getCookie(event, config.public.auth.cookie.accessToken)
	}
	if (authorization) {
		header.Authorization = 'Bearer ' + authorization
	}
	if (mfaSource) {
		header['Finno-MFA-Source'] = mfaSource
	}
	if (contentType) {
		header['Content-Type'] = contentType
	}
	if (cookie) {
		header['Cookie'] = cookie
	}

	if (
		event._path &&
		event._path.includes('/mfa') &&
		(config.public.environment == 'dev' || config.public.environment == 'int' || config.public.environment == 'uat')
	) {
		header['Bypass-MFA-Middleware'] = getCookie(event, 'bypass_mfa_middleware')
	}

	return header
}
