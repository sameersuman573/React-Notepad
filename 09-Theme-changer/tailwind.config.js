/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // to change theme we must enable this property
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

