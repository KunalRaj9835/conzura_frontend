// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agdasima: ["var(--font-agdasima)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
