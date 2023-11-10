/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        s3: "375px",

        s2: "400px",

        s1: "500px",

        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "1xl": "1440px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

