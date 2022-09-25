/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      inter: ["Inter", 'sans-serif']
    },
    backgroundColor: {
      'primary': '#0B0B0C',
      'secondary': '#0047FF',
      'cards': '#adadad15',
      'h-cards': '#141E61',
      'contact': '#12121280',
      'input-contact': '#EEEEEE10',
      'hover-input-contact': '#EEEEEE30',
      'footer': '#020C25',
      'hover-btn' : '#1013B0',
    },
    
    colors: {
      'default': '#FFF',
      'title': '#FFF',
      'nav':'#FFFFFFCC',
      'articles': '#FFFFFFB3',
      'btn': '#FFF',
    },

    borderColor: {
      'header': '#FFFFFF1A',
      'skills': '#FFFFFF34',
      'btn-secondary': '#FFFFFFB3',
      'secondary': '#0047FF',

    },
    extend: {

    },
  },
  plugins: [],
}
