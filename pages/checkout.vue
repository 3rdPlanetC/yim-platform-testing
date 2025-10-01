<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Checkout</h1>
		<p class="text-gray-600 mb-4">* Mock payment only</p>
		<button class="btn-primary" :disabled="processing || !cart.items.length" @click="Checkout">
			{{ processing ? 'Processing...' : 'Pay Now' }}
		</button>
	</div>
</template>
<script setup lang="ts">
// composables
const cart = useCartStore()
const router = useRouter()

// refs
const processing = ref(false)

// functions
async function Checkout() {
	processing.value = true
	try {
		await $fetch('/api/cart/checkout', { method: 'POST', body: { items: cart.items } })
		cart.clear()
		router.push('/orders')
	} finally {
		processing.value = false
	}
}
</script>
