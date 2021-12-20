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
  },
  plugins: [],
}
