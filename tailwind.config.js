/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
      height: {
        "dvh": ["100vh", "100dvh"]
      },
      colors: {
          accent: "rgba(255, 221, 0, 1)"
      }
    },
  },
  plugins: [],
}

