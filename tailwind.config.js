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
        dark_grey: "#4C4C4C",
      },
    },
    backgroundImage: {
      "hero-mobile": "url('/assets/home/mobile/image-header.jpg')",
      "hero-tablet": "url('/assets/home/tablet/image-header.jpg')",
      "hero-desktop": "url('/assets/home/desktop/image-hero.jpg')",
      "bg-circles-pattern": "url('/assets/home/desktop/pattern-circles.svg')",
    },
  },
  plugins: [],
};
