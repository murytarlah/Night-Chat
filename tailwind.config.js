/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['inter', 'sans-serif'],
        'cairo': ['cairo', 'sans-serif']
      },
      colors: {
        primary: '#006BFF'
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            zIndex: -10,
            opacity: 0
          },
          '50%':{
            zIndex:-5,
            opacity: 0
          },
          '75%':{
            zIndex:-2,
            opacity: 0.8
          },
          '100%': {
            transform: 'translateY(0%)',
            zIndex: 1,
            opacity: 1
          }
        },
        slideUp: {
          '100%': {
            transform: 'translateY(-100%)',
            zIndex: -10,
            opacity: 0,
            display: 'none',
          },
          '75%':{
            zIndex:-5,
            opacity: 0
          },
          '50%':{
            zIndex:-2,
            opacity: 0.8
          },
          '0%': {
            transform: 'translateY(0%)',
            zIndex: 1,
            opacity: 1,
            display: 'block',
          }
        }
      },
      animation:{
        slideDown:"slideDown 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideUp:"slideUp 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      }
    },
  },
  plugins: [],
}