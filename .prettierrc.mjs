// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	],
	useTabs: true,
	trailingComma: "none",
	printWidth: 100
};
