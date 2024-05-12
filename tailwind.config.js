/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkBlue: "#1E4067",
      grey: {
        100: "#EDEDED",
        200: "#D9D9D9",
        300: "#6A6262",
        400: "#666666",
      },
      sky: {
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      neutral: {
        0: "#ffffff",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "",
        600: "#525252",
        700: "#404040",
      },
      red: {
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
      },
      yellow: {
        300: "#fde047",
        500: "#eab308",
        600: "#ca8a04",
      },
      green: {
        300: "#86efac",
        500: "#22c55e",
        600: "#16a34a",
      },
      black: {
        100: "#000000",
      },
    },
  },
  plugins: [],
};
