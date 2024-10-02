/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "inner-primary": "#97A0CC",
        "outer-primary": "#3D4466",
        "outer-secondary": "#0C1231",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
