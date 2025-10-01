/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'
import lodash from 'lodash'
import tokens from './assets/tokens/mapping'
const colorsArray = Object.values(tokens.color).map(({ name, value }) => [lodash.kebabCase(name), value])
const colors = Object.fromEntries(colorsArray)

module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'node_modules/preline/dist/*.js'
	],
	theme: {
		extend: {
			colors: {
				...colors
			},
			fontSize: {
				...tokens.fontSize
			},
			fontFamily: {
				sans: ['Finnomena Trek', 'aktiv-grotesk-thai', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				xs: '480px',
				xxs: '320px'
			},
			container: {
				center: true
			},
			width: {
				'16.5': '4.125rem',
				'30': '7.5rem',
				'100': '25rem',
				inherit: 'inherit'
			},
			zIndex: {
				'100': '100',
				'1000': '1000'
			},
			borderWidth: {
				'1': '1px'
			},
			basis: {
				'13': '3.25rem',
				'15': '3.75rem'
			},
			flexBasis: {
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%'
			},
			minHeight: {
				'300': '300px'
			},
			height: {
				'100': '25rem'
			},
			marginBottom: {
				'20': '5rem'
			}
		}
	},
	variants: {
		extend: {
			display: ['group-hover']
		}
	},
	plugins: [require('preline/plugin'), require('tailwind-scrollbar')({ nocompatible: true })]
}
