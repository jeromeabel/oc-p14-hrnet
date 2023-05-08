/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#93AD18',
      'secondary': '#5a7003',
      'white': '#fcfdfa',
      'black': '#0C0F06',
      'highlight': '#690ABD',
      'highlight-darken': '#420174',
    },
    fontFamily: {
      serif: ['Noto Serif', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
