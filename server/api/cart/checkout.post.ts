export default defineEventHandler(async (event) => {
	const body = await readBody<{ items: CartItem[] }>(event)
	if (!body?.items?.length) throw createError({ statusCode: 400, statusMessage: 'Cart empty' })
	// pretend to charge...
	await new Promise((res) => setTimeout(res, 500))
	return { ok: true }
})
