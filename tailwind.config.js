/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
    extend: {
      backgroundColor: {
        'primary': '#0B0B0C',
        'secondary': '#0047FF',
        'cards': '#adadad15',
        'cards-soon': '#474747',
        'h-cards': '#141E61',
        'contact': '#0a0a0a',
        'input-contact': '#EEEEEE10',
        'footer': '#020C25',
        'hover-btn' : '#1013B0',
        'span-arraste': '#EEEEEE30',
      },
      
      colors: {
        'default': '#FFF',
        'title': '#FFF',
        'nav':'#FFFFFFCC',
        'articles': '#ffffffe2',
        'btn': '#FFF',
        'secondary': '#0047FF'
      },
  
      borderColor: {
        'header': '#FFFFFF1A',
        'footer': '#FFFFFF1A',
        'skills': '#FFFFFF34',
        'cards': '#FFFFFF34',
        'btn-secondary': '#FFFFFFB3',
        'secondary': '#0047FF',
        'projects': '#12121280'
      },

      animation:{
        showAlert: 'alert 5s ease',
      },

      keyframes:{
        alert: {
          '0%, 50%, 80%': {
            opacity: 1,
            visibility: 'visible',
          },
          '100%': {
            opacity: 0,
            visibility: 'invisible',
          },
        }
      },
    },
  },
  plugins: [],
}
