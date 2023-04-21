/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        josefin: ["Josefin Sans Regular"],
        josefin_bold: ["Josefin Sans Bold"],
        helvetica: ["Helvetica Now Display"],
        shadows: ["Shadows"],
        firaSans: ["FiraSansExtraCondensed"],
        firaSansLight: ["FiraSansExtraCondensedLight"],
        helvetica: ["Helvetica"],
      },
    },
  },
  plugins: [],
};
