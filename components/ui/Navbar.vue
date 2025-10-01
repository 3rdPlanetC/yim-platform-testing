<template>
	<header class="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
		<div class="container flex items-center h-14 gap-4">
			<NuxtLink to="/" class="font-semibold">Nuxt3 Shop</NuxtLink>
			<div class="flex-1" />
			<input v-model="query" placeholder="Search..." class="rounded-lg border px-3 py-2 w-48" />
			<NuxtLink to="/cart" class="relative px-3 py-2"
				>🛒
				<span v-if="totalQty" class="absolute -top-1 -right-1 text-xs bg-black text-white rounded-full px-1">
					{{ totalQty }}
				</span>
			</NuxtLink>
			<NuxtLink to="/profile" class="px-3 py-2">👤</NuxtLink>
		</div>
	</header>
</template>
<script setup lang="ts">
// refs
const query = ref('')

// composables
const cart = useCartStore()
const { totalQty } = storeToRefs(cart)
</script>
