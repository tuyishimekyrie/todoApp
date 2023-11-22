/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-light": "url('/images/bg-desktop-light.jpg')",
        "bg-light-mobile": "url('/images/bg-mobile-light.jpg')",
        "bg-dark": "url('/images/bg-desktop-dark.jpg')",
        "bg-dark-mobile": "url('/images/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
