/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'texture': "url('./assets/bg.jpg')",
        }
      },
    },
    plugins: [],
  }