
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "lg": { max: "992px" },
      "md": { max: "768px" },
      "sm": { max: "480px" },
    },
    container: {
      padding: "20px",
      center: true
    },
    extend: {
      screens: {
        "dek": { max: "1100px" }
      },
      colors: {
        green: "#27AE60",
        myblue: "#2D9CDB"
      },
    },
  },
  plugins: [],
}