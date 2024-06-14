/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "0 0 5px #555",
      },
      fontSize: {
        elephant: "220px",
      },
    },
  },
  plugins: [],
};
