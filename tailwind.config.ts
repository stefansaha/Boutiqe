import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'Lato', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      colors: {
        blush: {
          50: '#fdf5f7',
          100: '#fbeaef',
          200: '#f8d5df',
          300: '#f4b8c8',
          400: '#e8afc1',
          500: '#d9899f',
          600: '#c4687f',
          700: '#a54d64',
          800: '#894254',
          900: '#743b4a',
        },
        sage: {
          50: '#f6f8f5',
          100: '#e9ede7',
          200: '#d4ddd0',
          300: '#a8b5a2',
          400: '#8a9d82',
          500: '#6b8161',
          600: '#55674d',
          700: '#44523f',
          800: '#394434',
          900: '#30392d',
        },
        mauve: {
          50: '#f9f5f7',
          100: '#f4ebef',
          200: '#e9d5de',
          300: '#d9b5c5',
          400: '#b88a9b',
          500: '#a06e82',
          600: '#875869',
          700: '#704857',
          800: '#5d3e49',
          900: '#4f3640',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
