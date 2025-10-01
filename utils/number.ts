const rx = /(\d)(?=(\d{3})+\.)/g

export const formatCurrency = (currency: string | number, digit = 2, precision = false, ext = ''): string => {
	if (currency === null || currency === undefined) return '0'
	const num = parseFloat(`${currency}`)
	let numStr = num.toFixed(digit)
	if (!precision) {
		const dg = `${parseFloat(numStr)}`.split('.')
		if (dg.length > 0) {
			const negativeZero = dg[0] === '-0'
			dg[0] = parseFloat(dg[0]).toFixed(digit).replace(rx, `$1,`)
			const nums = dg[0].split('.')
			if (dg.length > 0) {
				dg[0] = nums[0]
			}

			numStr = `${negativeZero ? '-' : ''}${dg.join('.')}`
		}
		return `${numStr}${ext ? ` ${ext}` : ''}`
	}
	if (ext) {
		return `${numStr.replace(rx, `$1,`)} ${ext}`
	}
	return `${numStr.replace(rx, `$1,`)}`
}

export const formatCurrencyMillion = (currency: string | number, digit = 2, ext = ''): string => {
	const num = parseFloat(`${currency}`) / 1000000
	return `${num.toFixed(digit).replace(rx, `$1,`)} ${ext}`
}

export const formatCurrencyAbs = (currency: string | number, digit = 2, ext = ''): string => {
	return Math.abs(parseFloat(formatCurrency(currency, digit, false, ext)))
		.toFixed(digit)
		.replace(rx, `$1,`)
}

export const shortenNumber = (num: string | number, digits = 2): string => {
	const number = parseFloat(`${num}`)
	const si = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'K' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' }
	]
	let i
	for (i = si.length - 1; i > 0; i--) {
		if (Math.abs(number) >= si[i].value) {
			break
		}
	}
	return (number / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}

export const checkNumberPositive = (num: string | number): number => {
	if (!num) return 0
	const number = parseFloat(`${num}`)
	if (number === 0) return 0
	else if (number < 0) return -1
	else return 1
}
