<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Orders</h1>
		<ul class="space-y-3">
			<li v-for="o in orders || []" :key="o.id" class="bg-white p-4 rounded-xl">
				<div class="font-medium">Order #{{ o.id }}</div>
				<div class="text-sm text-gray-500">{{ o.createdAt }}</div>
			</li>
		</ul>
		<nuxt-link to="/cart" class="mt-4 block text-center">
			<button class="btn-primary">Back to Main</button>
		</nuxt-link>
	</div>
</template>
<script setup lang="ts">
// definePageMeta
definePageMeta({ middleware: ['auth'] })

// useFetch
const { data: orders } = await useFetch('/api/orders')
</script>
