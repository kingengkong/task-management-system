/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // ⬅️ WAJIB biar bisa pakai class "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
