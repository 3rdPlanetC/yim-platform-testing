export const darkenRGB = (hex: string, percent: number): string => {
	let r = parseInt(hex.slice(1, 3), 16)
	let g = parseInt(hex.slice(3, 5), 16)
	let b = parseInt(hex.slice(5, 7), 16)

	r = Math.round(r * (1 - percent))
	g = Math.round(g * (1 - percent))
	b = Math.round(b * (1 - percent))

	return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')
}
