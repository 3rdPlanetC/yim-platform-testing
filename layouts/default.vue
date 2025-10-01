<script setup lang="ts"></script>

<template>
	<div class="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
		<UiNavbar />
		<main class="flex-1 container py-6">
			<slot />
		</main>
		<UiFooter />
	</div>
</template>
