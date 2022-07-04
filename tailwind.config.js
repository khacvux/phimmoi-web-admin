/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bg2: "#212642",
      bg: "#1B1C31",
      bg3: "#2D324D",
      highlight: "#F06F38",
      secondary: "#2332B8",
      font: "#C4C4D3",
      slate: "#292A3E",
      dark: "#0E0F25",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
