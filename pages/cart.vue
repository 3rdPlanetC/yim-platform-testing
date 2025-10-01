<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
		<div v-if="!items.length">Cart is empty.</div>
		<div v-else class="grid md:grid-cols-3 gap-6">
			<div class="md:col-span-2 space-y-4">
				<article v-for="it in items" :key="it.id" class="bg-white rounded-xl p-4 flex gap-4">
					<img :src="it.image" class="w-24 h-24 rounded-lg object-cover" />
					<div class="flex-1">
						<h3 class="font-medium">{{ it.title }}</h3>
						<div class="text-sm text-gray-500">Qty: {{ it.qty }}</div>
						<UiPriceTag :value="it.price * it.qty" class="mt-1" />
					</div>
					<button class="text-red-600" @click="remove(it.id)">Remove</button>
				</article>
			</div>
			<aside class="bg-white rounded-xl p-4 h-max">
				<div class="flex justify-between">
					<span>Items</span><span>{{ totalQty }}</span>
				</div>
				<div class="flex justify-between mt-2"><span>Subtotal</span><PriceTag :value="subtotal" /></div>
				<NuxtLink to="/checkout" class="btn-primary mt-4 block text-center">Checkout</NuxtLink>
			</aside>
		</div>
	</div>
</template>
<script setup lang="ts">
// composables
const cart = useCartStore()
const { items, subtotal, totalQty } = storeToRefs(cart)

// functions
function remove(id: string) {
	cart.removeItem(id)
}
</script>
