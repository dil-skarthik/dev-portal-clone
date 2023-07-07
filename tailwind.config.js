/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.8rem',
      },
      fontFamily:{
        'proxi': ['Proxima Nova']
      },
      textColor:{
        'rblue':'#21395B'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/file(1).svg')",
        // 'footer-texture': "url('/img/file(2).png')",
      }
    },
  },
  plugins: [],
}

