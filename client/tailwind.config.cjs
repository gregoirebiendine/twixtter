/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'twixtter-blue': "#1d9bf0",
        'twixtter-blue-dark': "#1887d1",
        'twixtter-gray': "#313638",
        'twixtter-gray-light': "#797c7e",

        'twixtter-bg': "#2d2d30",

        'twixtter-purple1': "#8044a8",
        'twixtter-purple2': "#693b9d",
        'twixtter-purple3': "#66278f",
      },
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'bebas-neue-exp': ['bebas-neue-pro-semiexpanded', 'Arial', 'sans-serif']
			},
      backgroundImage: {
        'home': 'url(/bg-home.jpg)'
      }
    },
  },
  plugins: [],
}
