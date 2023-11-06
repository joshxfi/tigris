import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FF8207",
          200: "#FF682C",
        },
        secondary: {
          100: "#A3A3A3",
          200: "#212121",
          300: "#1C1C1C",
          400: "#111111",
        },
      },
    },
  },
  plugins: [],
};
export default config;
