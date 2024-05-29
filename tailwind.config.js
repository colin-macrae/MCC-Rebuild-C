/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {backgroundImage: {
      'custom-image': "url('./src/assets/111-Thatcher-Day-1-roback-3-background.jpg')",
    },},
  },
  plugins: [],
};
