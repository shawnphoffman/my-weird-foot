import tailwindColors from '@shawnphoffman/pod-sites-common/tailwind'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./sanity/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				hp: {
					bg: 'rgb(0, 30, 0)',
				},
				hp1: '#175200',
				hp2: '#7aeb1f',
				hp3: '#c0f321',
				hp4: '#fdff43',
				error: '#f73636',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: 0 },
					'100%': { transform: 1 },
				},
			},
			animation: {
				fadeInUp: '0.5s fadeInUp',
			},
		},
	},
	plugins: [tailwindColors.default],
}
