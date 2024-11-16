/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#678860',
          DEFAULT: '#4A5D45',
          dark: '#3A4A36',
        },
        background: {
          light: '#F5F3E8',
          DEFAULT: '#E5E3D8',
          dark: '#D5D3C8',
        },
      },
      boxShadow: {
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'soft-2xl': '0 25px 80px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};