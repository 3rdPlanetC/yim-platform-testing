export const useProductsStore = defineStore('products', () => {
	const items = ref<Product[]>([])
	const loaded = ref(false)

	const fetch = async () => {
		if (loaded.value) return
		const data = await $fetch<Product[]>('/api/products')
		items.value = data
		loaded.value = true
	}

	return {
		fetch
	}
})
