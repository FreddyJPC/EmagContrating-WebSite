/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Poppins', 'sans-serif'], // Define Poppins como la fuente principal
		},
		colors: {
		  headerBg: '#FFFFFF',
		  textPrimary: '#070441',
		  textSecondary: '#999999',
		},
	  },
	},
	plugins: [],
  };
  