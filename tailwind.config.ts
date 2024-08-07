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
        blueDark: "#0a2454",
        darkBlue: "#2B5A9B",
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
        pink: "#b4838a",
        bgModal: "#adadad82",
      },
      fontFamily: {
        main: ["Manrope, sans-serif"],
        special: ["Poppins, sans-serif"],
        secondary: ["hind, sans-serif"],
        tertiary: ["abhaya-libre, sans-serif"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            p: {
              textIndent: "1.5em",
              margin: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
