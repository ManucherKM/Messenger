
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: "20px",
      center: true
    },
    extend: {
      screens: {
        "desk": { max: "1200px" },
        "tabl": { max: "992px" },
        "mint": { max: "768px" },
        "phon": { max: "480px" },
      },
      colors: {
        green: "#27AE60",
        myblue: "#2D9CDB",
        dark: "#16171B",
        whiteDark: "#202125"
      },
    },
  },
  plugins: [],
}