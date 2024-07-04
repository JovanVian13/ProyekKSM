/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColorjo: "#b91c1c",
        backColorjo: "#fb923c",
        bgColorjo: "#ef4444",
        defaultColorkar: "#1d4ed8",
        backColorkar: "#3b82f6",
        bgColorkar: "#38bdf8",
        fromColor: "#4f46e5",
        toColor: "#a855f7",
        defaultColor: "#6d28d9"
      },
    },
  },
  plugins: [],
}