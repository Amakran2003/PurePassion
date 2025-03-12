/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D35400',
        'primary-light': '#E67E22',
        secondary: '#34495E',
        'secondary-light': '#F9F3E9',
        text: '#2C3E50',
        'text-light': '#ECF0F1',
        accent: '#E74C3C',
        gold: '#F1C40F',
        sand: '#FDFAF6',
        olive: '#7D8C4E',
        terracotta: '#E86D48',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'moroccan-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D35400' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm': '0 4px 10px rgba(211, 84, 0, 0.15)',
      },
    },
  },
  plugins: [],
};