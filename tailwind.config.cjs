/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        skeleton: 'skeleton 1.5s linear infinite'
      }
    }
  },
  plugins: []
};
