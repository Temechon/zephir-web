/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3366FF',
        'primary-500': '#0697F2',
        'primary-700': '#2245ad',
        'primary-50': '#F3F6FF',
        'primary-200': '#b5c7ff',
        'secondary': '#F80A50',
        'secondary-700': '#c4093e',
        'accent': '#3ECEE5',
        'mygreen': '#37BA83',
        'mylightgray': '#f6f7fc',
        'darker': '#323659',
        'darker-200': '#3f4570'


      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        display: ['Jost', 'sans-serif']
      },
    },
  },
  plugins: [],
}
