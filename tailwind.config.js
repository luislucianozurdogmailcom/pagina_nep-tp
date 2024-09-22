/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  		 "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}",],
       theme: {
        extend: {
          backgroundImage: {
            'pattern': "url('https://www.heropatterns.com/static/svg/diagonal-stripes.svg')",
          },
          boxShadow: {
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          },
        },
      },
  darkmode: "class",
  plugins: [nextui()],
}

