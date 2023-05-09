/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terra: "#D87D4A",
        terralight: "#FBAF85",
        almostblack: "#101010",
        grey: "#F1F1F1",
        lightgrey: "#FAFAFA",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
