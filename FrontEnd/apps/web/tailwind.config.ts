import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2744",
          light: "#1e2f55",
          dark: "#0f1b2d",
        },
        yellow: {
          petu: "#ffd94d",
        },
        blue: {
          petu: "#63b3ff",
        },
        green: {
          petu: "#50c88c",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
