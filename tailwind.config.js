/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        cream: "#F8EFE4",
        yellow: "#FAD02C",
        black: "#282120",
      },
    },
  },
  plugins: [],
};
