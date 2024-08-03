import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "_nav-button-solid": "rgba(189, 0, 63, 1)",
        "_nav-button-hover": "rgba(189, 0, 63, 0.676)",
        "_footer-bg": "rgba(189, 0, 63, 0.381)",
        _transparent: "rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
};
export default config;
