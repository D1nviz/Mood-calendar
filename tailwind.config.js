/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1f1f1f",
        "dark-secondary": "#353535",
        "dark-tertiary": "#575757",
        "text-color-primary": "#f6f6f6",
      },
    },
  },
  plugins: [],
};
