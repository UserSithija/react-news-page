/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0B0D17",
        light: "#fffff",
        semiText: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
