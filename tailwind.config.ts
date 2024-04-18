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
    fontSize: {
      xs: ["0.688rem", "120%"],
      sm: ["0.812rem", "120%"],
      base: ["1rem", "120%"],
      lg: ["1.250rem", "120%"],
      xl: ["1.500rem", "120%"],
      "2xl": ["1.812rem", "120%"],
      "3xl": ["2.188rem", "120%"],
      "4xl": ["2.688rem", "120%"],
      "5xl": ["3.312rem", "120%"],
      "6xl": ["4rem", "120%"],
      "7xl": ["4.938rem", "120%"],
    },
    extend: {
      letterSpacing: {
        tight: "-0.05em",
      },
      colors: {
        white: "#ffff",
        surface: {
          800: "#070e18",
          700: "#09121F",
          600: "#0c1727",
          500: "#0d192b",
          400: "#3d4755",
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
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
export default config;
