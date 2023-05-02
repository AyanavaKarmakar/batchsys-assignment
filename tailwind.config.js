/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      backgroundColor: {
        'light-theme': '#F7F7F7',
        'dark-theme': '#1F1F1F',
      },
      textColor: {
        'light-theme': '#1F1F1F',
        'dark-theme': '#F7F7F7',
      },
      colors: {
        'primary-light': '#e2e8f0',
        'primary-dark': '#3b82f6',
      },
    },
  },
  plugins: [],
}