<script setup lang="ts">
const props = defineProps<{ value: number }>()
const stars = computed(() => Math.round(props.value))
</script>

<template>
	<div aria-label="rating" class="text-yellow-500">{{ '★'.repeat(stars) + '☆'.repeat(5 - stars) }}</div>
</template>
