/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ptarmigan: "url('../public/images/ptarmigan.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
