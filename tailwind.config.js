/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      serif: ['Noto Serif', 'serif'],
    },
    extend: {
      colors: {
        error: '#ff0505',
        primary: '#6ABF4E',
        secondary: '#1F7B05',
        heading: '#1F7B05',
        white: '#fcfdfa',
        black: '#0C0F06',
      },
    },
  },
  plugins: [],
};
