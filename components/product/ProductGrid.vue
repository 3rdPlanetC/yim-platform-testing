<script setup lang="ts">
defineProps<{ items: Product[] }>()
</script>

<template>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<ProductCard v-for="p in items" :key="p.id" v-bind="p" />
	</div>
</template>
