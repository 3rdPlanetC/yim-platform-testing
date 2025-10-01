/* eslint-disable import/no-named-as-default-member */
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.locale('th')
dayjs.extend(customParseFormat)

export const dateThaiFormat = (dateString: string, inputFormat?: string | null, outputFormat = 'D MMM YY'): string => {
	dayjs.locale('th')
	dayjs.extend(customParseFormat)
	if (inputFormat === null || '') {
		return dayjs(dateString).locale('th').add(543, 'year').format(outputFormat)
	}
	return dayjs(dateString, inputFormat).locale('th').add(543, 'year').format(outputFormat)
}

export const dateThaiFormatFromUnix = (unix: number, outputFormat = 'D MMM YY'): string => {
	dayjs.locale('th')
	dayjs.extend(customParseFormat)
	return dayjs(unix * 1000)
		.locale('th')
		.add(543, 'year')
		.format(outputFormat)
}
