export {}

declare global {
	interface Product {
		id: string
		slug: string
		title: string
		description: string
		price: number
		image: string
		rating: number
		category: string
	}
}
