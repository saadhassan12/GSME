/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gsme: {
          blue: '#1e40af',
          'blue-dark': '#1e3a8a',
          'blue-light': '#3b82f6',
          'blue-pale': '#eff6ff',
          gold: '#c9a227',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
