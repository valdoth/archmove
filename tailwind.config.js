/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '488px',
      md: '768px',
      lg: '976px',
      xl: '1448px',
    },
    extend: {
      colors: {
        brightRed: '#FD665E',
        lightText: '#E9E9E9',
      },
      fontFamily: {
        playFar: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
