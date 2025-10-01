<script setup lang="ts">
const model = defineModel<number>({ required: true })
function dec() {
	if (model.value > 1) model.value--
}
function inc() {
	model.value++
}
</script>

<template>
	<div class="inline-flex items-center rounded-lg border">
		<button class="px-3 py-2" @click="dec">-</button>
		<input type="number" v-model.number="model" min="1" class="w-16 text-center py-2" />
		<button class="px-3 py-2" @click="inc">+</button>
	</div>
</template>
