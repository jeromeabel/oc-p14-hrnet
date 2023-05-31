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
        primary: '#93AD18',
        secondary: '#5a7003',
        heading: '#6d840d',
        white: '#fcfdfa',
        black: '#0C0F06',
        highlight: '#690ABD',
        'highlight-darken': '#420174',
      },
    },
  },
  plugins: [],
};
