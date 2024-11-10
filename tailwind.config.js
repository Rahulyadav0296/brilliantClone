/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Funnel Sans", "sans-serif"],
        customFontH: ["Playfair Display", "serif"],
        customFontP: ["Dancing Script", "cursive"],
      },
      boxShadow: {
        "black-shadow": "0px 4px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
