/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        amber: {
          accent: "#D97706",
          soft: "#FEF3C7",
        },
        navy: {
          900: "#0A131F",
          800: "#0D1B2A",
          700: "#172A40",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
