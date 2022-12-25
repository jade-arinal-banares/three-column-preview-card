/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        bgColor: "hsl(0, 0%, 95%)",
        txtColor: "hsla(0, 0%, 100%, 0.75)",
      },
      fontFamily: {
        fontFam: ["Big Shoulders Display", "cursive"],
      },
    },
  },
  plugins: [],
};
