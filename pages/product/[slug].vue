<template>
	<div>
		<UiBreadcrumbs :items="[{ to: '/', label: 'Home' }, { label: product?.title || '...' }]" />

		<div v-if="pending">Loading...</div>
		<div v-else-if="error">Not found</div>
		<div v-else class="grid md:grid-cols-2 gap-8">
			<img :src="product!.image" :alt="product!.title" class="rounded-xl w-full" />
			<div>
				<h1 class="text-3xl font-semibold mb-2">{{ product!.title }}</h1>
				<UiRatingStar :value="product!.rating" />
				<p class="text-gray-600 mt-2">{{ product!.description }}</p>
				<UiPriceTag class="mt-4" :value="product!.price" />

				<div class="mt-6 flex items-center gap-3">
					<UiQuantityInput v-model.number="qty" />
					<button class="btn-primary" @click="add">Add to cart</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
// composables
const route = useRoute()
const cart = useCartStore()

// refs
const qty = ref(1)

// useFetch
const { data: product, pending, error } = await useFetch(`/api/products/${route.params.slug}`)

// functions
function add() {
	if (!product.value) return
	cart.addItem({
		id: product.value.id,
		title: product.value.title,
		price: product.value.price,
		image: product.value.image,
		qty: qty.value
	})
}
</script>
<style scoped>
.btn-primary {
	@apply px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black;
}
</style>
