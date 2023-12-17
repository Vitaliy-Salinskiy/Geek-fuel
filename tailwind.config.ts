import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: "class",
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'header-2xl': '1575px',
			},
			colors: {
				"main-red": "#FF5050",
				"main-black": "#0D0D0D",
				"secondary-black": "#222222",
				"text-gray": "#6E6E6E",
				"border-gray": "#F8F8F8",
				"secondary-white": "#FFF6F6",
				"bg-white": "#F8F8F8",
			},
			fontFamily: {
				'din': ['DINPro Bold', 'sans-serif'],
				'graphik-medium': ['Graphik Medium', 'sans-serif'],
				'graphik-regular': ['Graphik Regular', 'sans-serif'],
			},
		},
	},
	plugins: [require('daisyui')],
}
export default config
