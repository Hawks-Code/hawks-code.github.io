/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				checkered: "url('/src/assets/checkered.svg')",
				stripes: "url('/src/assets/stripes.svg')"
			},
			colors: {
				"hawks-blue": "#0F1F67"
			},
			textShadow: {
				DEFAULT: "5px 5px 4px var(--tw-shadow-color)"
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value
					})
				},
				{ values: theme("textShadow") }
			);
		}),
		require("@tailwindcss/typography")
	]
};
