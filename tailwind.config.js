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
          50: '#f6faf3',
          100: '#e9f5e3',
          200: '#d3eac8',
          300: '#afd89d',
          400: '#82bd69',
          500: '#61a146',
          600: '#4c8435',
          700: '#3d692c',
          800: '#345427',
          900: '#2b4522',
          950: '#13250e',
        },
        secondary: {
          50: '#faf7fc',
          100: '#f4edfa',
          200: '#eadbf3',
          300: '#dabee9',
          400: '#c396dc',
          500: '#a96dc8',
          600: '#8e4eab',
          700: '#7c4195',
          800: '#623474',
          900: '#532f60',
          950: '#33153d',
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

