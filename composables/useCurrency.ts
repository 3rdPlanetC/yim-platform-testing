export function useCurrency() {
	const config = useRuntimeConfig()
	const fmt = new Intl.NumberFormat('th-TH', { style: 'currency', currency: config.public.currency })
	return { format: (n: number) => fmt.format(n) }
}
