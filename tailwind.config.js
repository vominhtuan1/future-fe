/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-slate-gray": "#265E55",
				wheat: "#F8DFB6",
				black: "#000201",
				scarlet: "#F8F8F8",
				"philippine-gray": "#8F8F8F",
			},
			fontSize: {
				"heading-1": [
					"4rem",
					{
						lineHeight: "4rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-2": [
					"3rem",
					{
						lineHeight: "3rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-3": [
					"2.5rem",
					{
						lineHeight: "2.5rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-4": [
					"2.25rem",
					{
						lineHeight: "2.25rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-5": [
					"1.5rem",
					{
						lineHeight: "1.5rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-6": [
					"1.125rem",
					{
						lineHeight: "1.125rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-7": [
					"0.875rem",
					{
						lineHeight: "0.875rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-8": [
					"0.75rem",
					{
						lineHeight: "0.75rem",
						letterSpacing: "-0.125rem",
					},
				],
				"heading-9": [
					"0.625rem",
					{
						lineHeight: "0.625rem",
						letterSpacing: "-0.125rem",
					},
				],
				"body-1": [
					"1.125rem",
					{
						lineHeight: "2.1875rem",
						letterSpacing: "-0.125rem",
					},
				],
				"body-2": [
					"1rem",
					{
						lineHeight: "2.1875rem",
						letterSpacing: "-0.125rem",
					},
				],
				"body-3": [
					"0.875rem",
					{
						lineHeight: "2.1875rem",
						letterSpacing: "-0.125rem",
					},
				],
			},
			fontFamily: {
				heading: ["JosefinSans"],
				body: ["Montserrat"],
			},
		},
	},
	plugins: [],
};
