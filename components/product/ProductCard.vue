<template>
	<NuxtLink :to="`/product/${slug}`" class="block group bg-white rounded-xl p-3 border hover:shadow">
		<img :src="image" :alt="title" class="rounded-lg aspect-square object-cover w-full" />
		<div class="mt-3 flex items-start gap-2">
			<h3 class="font-medium line-clamp-2 flex-1 group-hover:underline">{{ title }}</h3>
		</div>
		<div class="flex items-center justify-between mt-2">
			<UiPriceTag :value="price" />
			<UiRatingStar :value="rating ?? 4" />
		</div>
	</NuxtLink>
</template>
<script setup lang="ts">
// props
defineProps<{ id: string; title: string; image: string; price: number; rating?: number; slug: string }>()
</script>
