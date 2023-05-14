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
      "zx7-mobile": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      "zx7-tablet": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
      "zx7-desktop": "url('/assets/home/desktop/image-speaker-zx7.jpg')",
      "yx1-mobile": "url('/assets/home/mobile/image-earphones-yx1.jpg')",
      "yx1-tablet": "url('/assets/home/tablet/image-earphones-yx1.jpg')",
      "yx1-desktop": "url('/assets/home/desktop/image-earphones-yx1.jpg')",
    },
    content: {
      "outro-mobile": "url('/assets/shared/mobile/image-best-gear.jpg')",
      "outro-tablet": "url('/assets/shared/tablet/image-best-gear.jpg')",
      "outro-desktop": "url('/assets/shared/desktop/image-best-gear.jpg')",
    },
    screens: {
      outro: "720px",
      sm: "640px",

      xs: "500px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [],
};
