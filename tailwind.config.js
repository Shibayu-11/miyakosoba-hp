/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Shippori Mincho B1"', 'serif'],
      },
      colors: {
        cream: {
          50: '#fbf6ec',
          100: '#f6efe0',
          200: '#ede1c8',
        },
        soba: {
          red: '#a4231f',
          'red-dark': '#822018',
          ink: '#1a1614',
        },
      },
    },
  },
  plugins: [],
};
