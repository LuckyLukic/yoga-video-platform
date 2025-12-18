import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#5f9c8b",
          700: "#4f8878",
        },
      },
    },
  },
  plugins: [],
};

export default config;
