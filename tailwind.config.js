/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        polysans: ["Poly Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
