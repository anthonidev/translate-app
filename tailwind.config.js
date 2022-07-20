/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        dark: {
          DEFAULT: "#0A192F",
          100: "#112D3D",
          200: "#133040",
          300: "#112240",
          400: "#326D7F",
        },
        let: {
          DEFAULT: "#8592B0",
          100: "#CCD6F6"
        },
        dev: {
          DEFAULT: "#64FFDA",
          100: "#97FFE6",
          200: "#173B48"
        }

      }
    },
  },
  plugins: [],
}
