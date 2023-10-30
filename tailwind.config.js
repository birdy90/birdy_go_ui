/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./.storybook/**/*.{html,js,jsx,ts,tsx}",
    "./stories/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        secondary: {
          50: '#fffbea',
          100: '#fff4c5',
          200: '#ffe887',
          300: '#ffd648',
          400: '#ffc21e',
          500: '#fca004',
          600: '#ee7f00',
          700: '#b95204',
          800: '#963f0a',
          900: '#7b340c',
          950: '#471901',
        },
        danger: {
          50: '#fef2f2',
          100: '#ffe1e1',
          200: '#ffc8c8',
          300: '#ffa2a2',
          400: '#fd6c6c',
          500: '#f63d3d',
          600: '#e42525',
          700: '#bf1616',
          800: '#9e1616',
          900: '#831919',
          950: '#470808',
        },
        border: colors.gray["200"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

