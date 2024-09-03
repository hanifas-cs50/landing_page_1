/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.25)" }
        }
      },
      animation: {
        zoom: "zoom 10s ease-in-out 1"
      },
    },
  },
  plugins: [],
};
