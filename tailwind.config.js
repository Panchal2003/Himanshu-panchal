/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        premiumBlue: '#0f172a',
        premiumGold: '#d4af37',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.25)',
        glow: '0 0 25px rgba(212, 175, 55, 0.45)',
      },
      backgroundImage: {
        gradientpremium: 'radial-gradient(circle at 10% 10%, rgba(212,175,55,0.17), rgba(15,23,42,0.95))',
      },
    },
  },
  plugins: [],
};
