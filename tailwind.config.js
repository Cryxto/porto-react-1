import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      console.log("dasasd");

      console.log("Applying custom base styles");
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
