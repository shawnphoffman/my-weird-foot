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
				// brand: {
				hp1: '#175200',
				hp2: '#7aeb1f',
				hp3: '#c0f321',
				hp4: '#fdff43',
				error: '#f73636',
				// },
				boba: {
					gold: 'rgb(205 157 68)', // stars, links
					green: 'rgb(162, 197, 183)',
					border: 'rgb(83 100 75 / 0.5)', // borders
					red: 'rgb(117 53 54)', // underlines
					grayn: 'rgb(116 132 116)', // muted
				},
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
