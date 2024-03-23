/** @type {import('tailwindcss').Config} */
import f from "./";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0B0D17",
        light: "#fffff",
        semiText: "#D0D6F9",
      },
      backgroundImage: {
        homeBgDesktop: "url('../src/assets/home/background-home-desktop.jpg')",
        homeBgTablet: "url('./src/assets/home/background-home-tablet.jpg')",
        homeBgMobile: "url('./src/assets/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        Bellefair: "Bellefair, serif",
        Barlow: "Barlow Condensed, sans-serif",
      },
    },
  },
  plugins: [],
};
