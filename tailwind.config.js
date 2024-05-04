/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#561DE4",
        secondary: "#A961FD",
        tertiary: "#5E2F71"
      }
    },
  },
  plugins: [],
};
