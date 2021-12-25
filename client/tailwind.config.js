module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'custom': {
        100: '#2e444b',
        200: '#083e5c',
        300: '#b5c1c5',
        400: '#29d9ec',
        500: '#4f7082',
        600: '#42c0e0',
      }
    },
    extend: {
      width: {
        112: '32rem',
        144: '38rem'
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
