/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "helvetica-bold": ["Helvetica Bold"],
      "helvetica-light": ["Helvetica Light"],
      "helvetica-normal": ["Helvetica Normal"],
    },
    container: {
      center: true,
      padding: "165px",
    },
    extend: {
      backgroundImage: {
        mainBg: `url('../img/main_bg.png')`,
      },
      colors: {
        "custom-color": " rgba(26, 26, 26, 1)",
        "custom-color-lighter": "rgba(37, 37, 37, 1)",
        "custom-green": " rgba(52, 199, 89, 1)",
      },
    },
  },
  plugins: [],
};
