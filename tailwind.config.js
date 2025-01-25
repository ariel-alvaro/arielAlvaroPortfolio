/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'rs': ['rs'],
            'rsCL': ['rsCL'],
            'rsIN': ['rsIN']
        }
    },
    screens: {
        'smallPhone': '370px',
        'phone': '480px',
        'midPhone': '620px',
        'bigPhone': '800px',
        'tablet': '1024px',
        'laptop': '1280px',
        'desktop': '1366px',
        'fullhd': '1600px',
        'fullhd2': '1900px'
    }
  },
  plugins: [],
}

