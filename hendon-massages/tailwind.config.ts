import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf8f5",
        sand: "#f5ede3",
        warm: "#e8d9c8",
        mocha: "#8b6f4e",
        "mocha-light": "#c4a882",
        bark: "#2c2316",
        "bark-mid": "#4a3728",
        stone: "#7a6a57",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
