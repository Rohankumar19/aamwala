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
        background: "var(--cream)",
        foreground: "var(--dark)",
        green: {
          DEFAULT: "var(--green)",
          2: "var(--green2)",
          3: "var(--green3)",
        },
        yellow: {
          DEFAULT: "var(--yellow)",
          2: "var(--yellow2)",
          3: "var(--yellow3)",
        },
        orange: "var(--orange)",
        cream: "var(--cream)",
        dark: "var(--dark)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        DEFAULT: "var(--shadow)",
        2: "var(--shadow2)",
      },
    },
  },
  plugins: [],
};
export default config;
