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
        border: {
          DEFAULT: colors.gray["200"],
          dark: colors.gray["700"],
        },
        back: {
          DEFAULT: colors.gray["50"],
          dark: colors.gray["900"],
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

