/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'twixtter-blue': "#1d9bf0",
        'twixtter-gray': "#313638",
        'twixtter-gray-shaded': "#797c7e",
      },
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'bebas-neue-exp': ['bebas-neue-pro-semiexpanded', 'Arial', 'sans-serif']
			},
    },
  },
  plugins: [],
}
