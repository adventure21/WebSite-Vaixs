/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f5e2",
          100: "#d2ebc5",
          200: "#bbdfa9",
          300: "#a4d38c",
          400: "#8ec86f",
          500: "#77bc52",
          600: "#60b036",
          700: "#4d9330",
          800: "#3a742a",
          900: "#285625",
          950: "#16381f",
        },
      },
    },
  },
  plugins: [],
};
