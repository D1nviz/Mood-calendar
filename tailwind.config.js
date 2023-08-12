/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1f1f1f",
        "dark-secondary":  "#353535",
        "dark-tertiary": "#575757",
        "text-color-primary": "#f6f6f6"
      }
    }
  },
  plugins: [],
}
