export const useUserStore = defineStore('user', () => {
	const user = ref<User | null>(null)
	const token = ref('')

	function LoginAction(email: string, password: string) {
		return $fetch<{ token: string; user: User }>('/api/auth/login', {
			method: 'POST',
			body: { email, password }
		}).then((res) => {
			user.value = res.user
			token.value = res.token
		})
	}

	function LogoutAction() {
		user.value = null
		token.value = ''
	}

	return {
		user,
		token,
		logout: LogoutAction,
		login: LoginAction
	}
})
