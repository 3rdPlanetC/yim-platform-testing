export default defineEventHandler(() => {
	return [
		{ id: 'ord_1', createdAt: new Date().toISOString(), total: 2390 },
		{ id: 'ord_2', createdAt: new Date(Date.now() - 86400000).toISOString(), total: 399 }
	]
})
