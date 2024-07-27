/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(120deg)" },
        },
        wiggle: {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "rotate(0deg)" },
          "10%, 50%": { transform: "rotate(-10deg)" },
          "30%,  70%": { transform: "rotate(10deg)" },
        },
        collapse: {
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s",
        rotate: "rotate 0.5s",
        collapse: "collapse 0.3s",
      },
    },
  },
  plugins: [],
};
