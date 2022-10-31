
/** @type {import('tailwindcss').Config} */
module.exports = {
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
        myblue: "#2D9CDB"
      },
    },
  },
  plugins: [],
}