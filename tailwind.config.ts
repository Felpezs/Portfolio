import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      1: "20px",
      2: "40px",
      3: "60px",
      4: "80px",
      5: "200px",
    },
    colors: {
      white: "#ffff",
      surface: {
        800: "#070e18",
        600: "#0c1727",
        500: "#0d192b",
      },
      primary: {
        700: "#1a4c99",
        500: "#246bd7",
      },
      secondary: {
        900: "#300f5a",
        800: "#3f1476",
        600: "#6821c4",
        500: "#7224d7",
        300: "#a16ce4",
        200: "#be9aed",
        50: "#f1e9fb",
      },
      neutral: {
        700: "#8d8d8d",
        600: "#b4b4b4",
        500: "#c6c6c6",
        100: "#ededed",
        50: "#f9f9f9",
      },
    },
    extend: {
      fontSize: {
        base: ["1rem", "120%"],
        lg: ["1.5rem", "120%"],
        xl: ["2.250rem", "120%"],
        "2xl": ["3.375rem", "120%"],
        "3xl": ["5.062rem", "120%"],
      },
      letterSpacing: {
        tight: "-0.05em",
      },
    },
  },
  plugins: [],
};
export default config;
