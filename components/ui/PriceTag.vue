<template>
	<span class="font-semibold">{{ format(props.value) }}</span>
</template>
<script setup lang="ts">
// props
const props = defineProps<{ value: number }>()

// composables
const { format } = useCurrency()
</script>
