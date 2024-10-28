import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#0180FF",
        secondary: "#55C1FC",
        dark: "#2F3032",
        red: "#DE5858",
        redCustom: {
          100: "#FFECEC",
          200: "#FFDADA",
          300: "#FFC6C6",
          400: "#FFADAD",
          500: "#FF9B9B",
          600: "#FF6666",
          700: "#FF4D4D",
          800: "#FF1919",
          900: "#E60000",
        },
        orange: "#FF7B01",
        yellow: "#FFA901",
        green: "#4A9F53",
        gray: {
          100: "#F5F7FB",
          200: "#E4E4E4",
          300: "#D6D8DC",
          400: "#C1C3C8",
          500: "#AFB1BF",
          600: "#858798",
          700: "#2F3032",
          800: "#2F3032",
          900: "#858798",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;

