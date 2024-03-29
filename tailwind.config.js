/** @type {import('tailwindcss').Config} */


const colors = require('tailwindcss/colors')
const fontFamily = require('tailwindcss/defaultTheme').fontFamily

module.exports = {
  module: {
    rules:[
      {
        test: /\.pdf$/,
        use: 'file-loader?name=[path][name].[ext]',
      },]
  },
  content: [
    './src/app/components/Spotify.js',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Lato: ['Lato', ...fontFamily.sans],
        Poppins: ["Poppins", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
      },
      colors: {
        primary: '#2e3047',
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          500: '#6e767d',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#3c3f58',
          100: '#434553',

        },
        bordercolor: '#2e3a4d',
        borderhover: '#4d607d',
        techbar: '#12161c',
        glow: '#383a54'
      }
      }
    },
  plugins: [],
};