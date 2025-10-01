const environment = process.env.ENVIRONMENT
const buildAsset = '_campaignweb/'
const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
	css: ['@/assets/scss/main.scss', 'toastify-js/src/toastify.css'],
	pages: true,
	vite: {
		build: {
			assetsDir: buildAsset,
			sourcemap: !isProd
		},
		css: {
			devSourcemap: !isProd
		}
	},
	sourcemap: {
		server: !isProd,
		client: !isProd
	},
	experimental: { appManifest: false },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	nitro: {
		devProxy: {
			'/proxy': {
				target: process.env.DEV_PROXY_URL || 'https://int.finnomena.com',
				changeOrigin: true,
				cookieDomainRewrite: '',
				toProxy: true
			}
		}
	},
	app: {
		head: {
			title: 'Nuxt3 Shop',
			htmlAttrs: {
				lang: 'th'
			},
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content:
						'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, interactive-widget=resizes-content'
				},
				{
					id: 'description',
					name: 'description',
					content: process.env.npm_package_description ?? ''
				}
			],
			link: [
				{
					rel: 'stylesheet',
					href: `https://use.typekit.net/gru3eoh.css`,
					type: 'text/css'
				},
				{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
			]
		},
		buildAssetsDir: buildAsset
	},
	compatibilityDate: '2025-01-21',
	imports: {
		dirs: [
			'composables',
			'composables/*/index.{ts,js,mjs,mts}',
			'composables/**',
			'stores',
			'store/**',
			'store/*/index.{ts,js,mjs,mts}'
		]
	},

	typescript: { strict: true, typeCheck: false },
	modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
	tailwindcss: {
		viewer: false
	},
	runtimeConfig: {
		// private
		jwtSecret: process.env.JWT_SECRET || 'dev-secret',
		public: {
			siteName: 'Nuxt3 Shop',
			currency: 'THB'
		}
	},
	routeRules: {
		'/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
	}
})
