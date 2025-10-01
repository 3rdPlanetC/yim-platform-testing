<template>
	<section>
		<h1 class="text-2xl font-semibold mb-4">Featured Products</h1>
		<div v-if="pending">Loading...</div>
		<ProductGrid v-else :items="products || []" />
	</section>
</template>
<script setup lang="ts">
// useFetch
const { data: products, pending } = await useFetch('/api/products')
</script>
