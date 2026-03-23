/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 30px rgba(0, 229, 183, 0.22)",
        panel: "0 20px 40px rgba(0, 0, 0, 0.28)",
      },
      colors: {
        ink: "#060b16",
        line: "rgba(140, 163, 199, 0.14)",
        mint: "#10e7b3",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
