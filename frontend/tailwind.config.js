/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary": "#7B5BC8",
        "secondary": "#a7a7a7",
        "tertiary": "#646464",
        "accent": "#333333",
        "background": "#000000",
        "textColor": "#f9f9f9",
        "gradient": "#f16001",
      }
    },
  },
  plugins: [],
}
