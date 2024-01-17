import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        1536: { max: "1536px", min: "1441px" },
        1440: { max: "1440px", min: "1367px" },
        1366: { min: "1366px", max: "1439px" },
        md: { max: "850px" },
      },
      colors: {
        blackScale: {
          500: "#121212",
        },
        blue: "#007aff",
        gold: "#d4992e",
        green: "#3bb77e",
        greenScale: {
          200: "#C5EAD9",
          600: "#3BB77E",
        },
        grey: "#696969",
        purple: {
          300: "#5f2350",
        },
        bgModal: "#adadad82",
      },
      fontFamily: {
        main: ["Manrope"],
        special: ["Poppins"],
        secondary: ["hind"],
      },
    },
  },
  plugins: [],
};
export default config;
