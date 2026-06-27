import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#575757",
        heading: "#2a2d34",
        muted: "#8d8d8d",
        accent: "#d3cbf5",
      },
      fontFamily: {
        nobel: ["nobel", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
