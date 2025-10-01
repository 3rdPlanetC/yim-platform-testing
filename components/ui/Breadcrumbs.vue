<template>
	<nav class="text-sm text-gray-500 mb-4">
		<ol class="flex items-center gap-2">
			<li v-for="(i, idx) in items" :key="idx" class="flex items-center gap-2">
				<NuxtLink v-if="i.to" :to="i.to" class="hover:underline">{{ i.label }}</NuxtLink>
				<span v-else>{{ i.label }}</span>
				<span v-if="idx < items.length - 1">/</span>
			</li>
		</ol>
	</nav>
</template>
<script setup lang="ts">
// props
defineProps<{ items: { to?: string; label: string }[] }>()
</script>
