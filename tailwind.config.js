module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Circular', 'Arial', 'sans-serif'],
      'display': ['SangBleu', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000000',
        'off-black': '#494949',
        'white': '#FFFFFF',
        'blue': '#00206e',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}