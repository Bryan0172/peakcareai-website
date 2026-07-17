/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EFF4F9',
          100: '#D5E2EE',
          200: '#A8C2D9',
          300: '#6A96B8',
          400: '#3A6E96',
          500: '#1E4E78',
          600: '#163C5F',
          700: '#102E4A',
          800: '#0B2137',
          900: '#071628',
        },
        gold: {
          50:  '#FDF9EC',
          100: '#F9EFCA',
          200: '#F1DA8A',
          300: '#E8C14A',
          400: '#D4A017',
          500: '#B8860B',
          600: '#956B08',
          700: '#6E4F06',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
