export {}

declare global {
	interface CartItem {
		id: string
		title: string
		price: number
		image: string
		qty: number
	}
}
