module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Noto Sans KR",
      },
      colors: {
        gray: {
          100: "#F7F8F9",
          200: "#E8EBED",
          300: "#C9CDD2",
          400: "#9EA4AA",
          500: "#72787F",
          600: "#454C53",
          700: "#26282B",
          800: "#1B1C1F",
        },
      },
    },
  },
  plugins: [],
};
