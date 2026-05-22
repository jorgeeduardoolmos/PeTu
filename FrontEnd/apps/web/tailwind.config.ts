import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1a2744", light: "#1e2f55", dark: "#0f1b2d" },
      },
    },
  },
  plugins: [],
};
export default config;
