/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Anton': ["Anton", "sans-serif"],
        'OpenSans': ["Open Sans", "sans-serif"]
      }
    },
    colors: {
      'primary': '#323150',
      'white': '#ffffff',
      'varRed': '#EA4D59',
      'varYellow': '#F5C35A ',
      'background': '#F0EFF5'
    },
  },
  plugins: [],
}

