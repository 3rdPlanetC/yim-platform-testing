import { products } from '../../utils/db'
export default defineEventHandler((event) => {
	const slug = getRouterParam(event, 'slug')
	const found = products.find((p) => p.slug === slug)
	if (!found) throw createError({ statusCode: 404, statusMessage: 'Product not found' })
	return found
})
