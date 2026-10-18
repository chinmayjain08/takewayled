import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          DEFAULT: "#00F0FF",
          glow: "rgba(0, 240, 255, 0.35)",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          glow: "rgba(245, 158, 11, 0.35)",
        },
        industrial: {
          950: "#090d16",
          900: "#0f172a",
          850: "#131c31",
          800: "#1e293b",
          700: "#334155",
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -3px rgba(0, 240, 255, 0.3)",
        "amber-glow": "0 0 25px -3px rgba(245, 158, 11, 0.3)",
        "card-glow": "0 10px 30px -10px rgba(0, 240, 255, 0.15)",
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(rgba(0, 240, 255, 0.12) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.15), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "beam-sweep": "sweep 8s ease-in-out infinite",
      },
      keyframes: {
        sweep: {
          "0%, 100%": { opacity: "0.2", transform: "rotate(-12deg) scale(0.95)" },
          "50%": { opacity: "0.45", transform: "rotate(12deg) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
