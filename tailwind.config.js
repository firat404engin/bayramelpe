/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
          light: '#818cf8',
        },
        dark: '#0f172a',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 