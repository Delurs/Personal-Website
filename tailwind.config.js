/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C2B4A',
        mist: '#5B6B8C',
        paper: '#F5F8FF',
        primary: {
          DEFAULT: '#4F7DFF',
          soft: '#7C9BFF',
        },
        blush: '#FFD9E8',
        lilac: '#E4DBFF',
        mint: '#D7F4E7',
        butter: '#FFF3C4',
        sky: '#DCE8FF',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        card: '0 20px 45px -18px rgba(76,110,245,.20)',
        soft: '0 8px 24px -12px rgba(28,43,74,.14)',
      },
    },
  },
  plugins: [],
}