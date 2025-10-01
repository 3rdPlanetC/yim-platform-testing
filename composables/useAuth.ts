import { useUserStore } from '~/composables/user'

export function useAuth() {
	const userStore = useUserStore()
	const user = computed(() => userStore.user)
	const token = computed(() => userStore.token)
	const loggedIn = computed(() => !!userStore.token)

	return { user, token, loggedIn, login: userStore.login, logout: userStore.logout }
}
