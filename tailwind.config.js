/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{mdx,ts,tsx,jsx,js}"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '2px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [require('daisyui')],
}
