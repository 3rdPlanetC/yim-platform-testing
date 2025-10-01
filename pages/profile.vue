<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Profile</h1>
		<pre class="bg-white p-4 rounded-xl">{{ user }}</pre>
	</div>
</template>
<script setup lang="ts">
// definePageMeta
definePageMeta({ middleware: ['auth'] })

// composables
const { user } = useAuth()
</script>
