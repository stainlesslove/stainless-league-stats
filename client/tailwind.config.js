module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        112: '32rem',
        144: '38rem'
      },
      blur: {        
        xs: '2px',      
      }
    },
    color: {
      'custom': {
        100: '',
        200: '',
        300: '',
        400: '',
        500: '',
        600: '',
      }
    },
  },
  plugins: [],
}
