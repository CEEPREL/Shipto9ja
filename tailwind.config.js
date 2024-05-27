/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { colors: { pri: "#33652D", sec: "#fef282" } },
  },
  plugins: [],
};
