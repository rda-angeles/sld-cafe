/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      secondary: "Esteban",
    },
    colors: {
      "c-primary": "var(--c-primary)",
      "c-secondary": "var(--c-secondary)",
      "c-tertiary": "var(--c-tertiary)",
      "c-quarternary": "var(--c-quarternary)",
      "c-white": "var(--c-white)",
      "c-black": "var(--c-black)",
    },
  },
  plugins: [],
};
