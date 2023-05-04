/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/scripts/react-ts/components/**/*.{js,ts,jsx,tsx}",
		"./src/scripts/react/components/**/*.{js,ts,jsx,tsx}",
		"./src/pug/**/*.{jade,pug}",
		"./src/html/**/*.{htm,html}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
