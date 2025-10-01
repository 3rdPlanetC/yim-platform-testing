export {}

declare global {
	interface Order {
		id: string
		createdAt: string
		total: number
	}
}
