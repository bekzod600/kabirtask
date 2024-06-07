const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "992px",
        xl: "1240px",
        xxl: "1336px",
      },
    },
    extend: {
      colors: {
        primary: "#0b5cff",
        white: "#ffffff",
        black: "#00031f",
        gray: "#666484",
        "light-blue": "#0b5cff1a",
        "dark-blue": "#232333",
      },
      screens: {
        sx: "320px",
        xs: "375px",
        sm: "576px",
        ss: "650px",
        md: "768px",
        mmd: "800px",
        lg: "992px",
        xl: "1200px",
        xxl: "1536px",
      },
      // borderRadius: {
      //   base: "var(--radius)",
      //   basec: "var(--base-radius)",
      //   big: "var(--big-radius)",
      //   bigger: "var(--biger-radius)",
      //   small: "var(--small-radius)",
      //   xs: "var(--xs-radius)",
      // },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  // plugins: []
};
