/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#06194c',
        royal: '#064ee4',
        powder: '#eaf2ff',
        porcelain: '#fbfaf6',
        champagne: '#e8c878',
        sand: '#efe5d4',
        ink: '#071126',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(6, 78, 228, 0.24)',
        gold: '0 16px 42px rgba(232, 200, 120, 0.24)',
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle at 20% 20%, rgba(6,78,228,.18), transparent 34%), radial-gradient(circle at 82% 14%, rgba(232,200,120,.2), transparent 26%)',
      },
    },
  },
  plugins: [],
};
