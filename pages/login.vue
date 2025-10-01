<script setup lang="ts">
const { login, loggedIn } = useAuth()
const router = useRouter()
const route = useRoute()

const form = reactive({ email: 'demo@shop.local', password: '123456' })
const loading = ref(false)

watchEffect(() => {
	if (loggedIn.value) {
		const go = (route.query.redirect as string) || '/'
		router.replace(go)
	}
})

async function onSubmit() {
	loading.value = true
	try {
		await login(form.email, form.password)
		const go = (route.query.redirect as string) || '/'
		router.replace(go)
	} catch (e: any) {
		alert(e?.data?.message || 'Login failed')
	} finally {
		loading.value = false
	}
}
</script>

<template>
	<div class="max-w-sm mx-auto bg-white p-6 rounded-xl border">
		<h1 class="text-xl font-semibold mb-4">Login</h1>
		<form @submit.prevent="onSubmit" class="space-y-3">
			<div>
				<label class="block text-sm mb-1">Email</label>
				<input v-model="form.email" type="email" class="w-full border rounded-lg px-3 py-2" />
			</div>
			<div>
				<label class="block text-sm mb-1">Password</label>
				<input v-model="form.password" type="password" class="w-full border rounded-lg px-3 py-2" />
			</div>
			<button class="btn-primary w-full" :disabled="loading">{{ loading ? '...' : 'Sign in' }}</button>
		</form>
	</div>
</template>
<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })
const { data: orders } = await useFetch('/api/orders')
</script>

<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Orders</h1>
		<ul class="space-y-3">
			<li v-for="o in orders || []" :key="o.id" class="bg-white p-4 rounded-xl">
				<div class="font-medium">Order #{{ o.id }}</div>
				<div class="text-sm text-gray-500">{{ o.createdAt }}</div>
			</li>
		</ul>
	</div>
</template>
