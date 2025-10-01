import { z } from 'zod'

const Body = z.object({ email: z.string().email(), password: z.string().min(6) })

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const parsed = Body.safeParse(body)
	if (!parsed.success) throw createError({ statusCode: 400, statusMessage: 'Invalid body' })

	// mock auth
	return {
		token: 'mock-token',
		user: { id: 'u_1', email: parsed.data.email, name: 'Demo User' }
	}
})
