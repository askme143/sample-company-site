/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#6C6C6C",
        "blue-gray": "#6C6C6C",
        "blue-black": "0A263F",
      },
    },
  },
  plugins: [],
};
