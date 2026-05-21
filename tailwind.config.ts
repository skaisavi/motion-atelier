import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        atelier: {
          black: "#050505",
          ink: "#0A0A0A",
          charcoal: "#111111",
          graphite: "#1C1C1C",
          ivory: "#F4EFE7",
          stone: "#A8A09A",
          champagne: "#C7A96B",
          oxblood: "#421A1A",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
      },
      transitionTimingFunction: {
        atelier: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        "soft-edge": "0 24px 80px rgba(0, 0, 0, 0.36)",
      },
    },
  },
  plugins: [],
} satisfies Config;
