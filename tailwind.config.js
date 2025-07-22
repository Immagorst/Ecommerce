/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Softer pastel tones for GeminiShop
        primary: "#8CA6DB",      // soft muted blue
        secondary: "#F3B6B6",    // soft muted pink
        accent: "#A89CC8",       // soft muted purple
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
