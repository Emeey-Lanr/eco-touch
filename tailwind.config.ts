import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        bc: "#F5EDE0",
        brand: {
          100: "#F4FAF5",
          200: "#D1EBD3",
          300: "#ADDBB1",
          400: "#8ACC8F",
          500: "#66BC6E",
          600: "#49A751",
          700: "#398340",
          800: "#2A602E",
          900: "#1B3E1E",
        },
        grey: {
          50: "#F1F3F1",
          100: "#E3E8E4",
          200: "#C8D0C9",
          300: "#ACB9AD",
          400: "#91A192",
          500: "#758A77",
          600: "#5E6E5F",
          700: "#465347",
          800: "#2F3730",
          900: "#171C18",
        },
        white: "#fffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config
