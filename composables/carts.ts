export const useCartStore = defineStore('cart', () => {
	// states
	const items = ref<CartItem[]>([])
	// getters
	const totalQty = computed(() => items.value.reduce((a, b) => a + b.qty, 0))
	const subtotal = computed(() => items.value.reduce((a, b) => a + b.qty * b.price, 0))
	// actions
	const addItem = (it: CartItem) => {
		const f = items.value.find((i) => i.id === it.id)
		if (f) f.qty += it.qty
		else items.value.push({ ...it })
	}
	const removeItem = (id: string) => {
		items.value = items.value.filter((i) => i.id !== id)
	}
	const clear = () => {
		items.value = []
	}
	return {
		items,
		totalQty,
		subtotal,
		addItem,
		removeItem,
		clear
	}
})
