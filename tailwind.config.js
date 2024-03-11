/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "helvetica-bold": ["Helvetica Bold"],
    },
    container: {
      center: true,
      padding: "165px",
    },
    extend: {
      colors: {
        "custom-color": " rgba(26, 26, 26, 1)",
      },
    },
  },
  plugins: [],
};
