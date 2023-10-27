/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        twice: 'url("/trailer.gif")',
      },
      colors: {
        "font-color": "#333333",
        bg1: "#d4b281",
        bg2: "#b68f67",
        bg3: "#f5f5f5",
        bg4: "#9c4d98",
        bg5: "#612899",
      },
      gridTemplateColumns: {
        template: "repeat(auto-fit,minmax(10rem, 1fr))",
      },
    },
  },
  plugins: [],
};
