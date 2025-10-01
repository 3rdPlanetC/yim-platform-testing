<script setup lang="ts">
import { storeToRefs } from 'pinia'

const open = defineModel<boolean>({ default: false })
const cart = useCartStore()
const { subtotal, items } = storeToRefs(cart)
</script>

<template>
	<teleport to="body">
		<div v-if="open" class="fixed inset-0 bg-black/40" @click="open = false" />
		<aside v-if="open" class="fixed right-0 top-0 bottom-0 w-96 bg-white p-4 shadow-xl">
			<h2 class="text-lg font-semibold">Cart</h2>
			<div class="divide-y my-4 max-h-[70vh] overflow-auto">
				<div v-for="it in items" :key="it.id" class="py-3 flex gap-3">
					<img :src="it.image" class="w-16 h-16 rounded object-cover" />
					<div class="flex-1">
						<div class="font-medium">{{ it.title }}</div>
						<div class="text-sm">x{{ it.qty }}</div>
					</div>
					<button class="text-red-500" @click="cart.removeItem(it.id)">✕</button>
				</div>
			</div>
			<div class="flex justify-between font-medium">
				<span>Subtotal</span><span>{{ subtotal }}</span>
			</div>
			<NuxtLink to="/checkout" class="btn-primary mt-4 block text-center" @click="open = false"
				>Checkout</NuxtLink
			>
		</aside>
	</teleport>
</template>
