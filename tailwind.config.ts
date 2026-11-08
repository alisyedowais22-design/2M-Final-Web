import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1A33",
          elevated: "#172749",
          line: "rgba(237,234,224,0.14)",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F5F8",
          line: "rgba(14,26,51,0.10)",
        },
        bronze: {
          DEFAULT: "#C81E2C",
          light: "#E63946",
          dark: "#98141F",
        },
        steel: {
          DEFAULT: "#2F4C82",
          light: "#4C6DAE",
          dark: "#1F345A",
        },
        ivory: "#F5F3EC",
        mist: "#9DAAC4",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        wideish: "0.04em",
        label: "0.16em",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(200,30,44,0) 0%, rgba(200,30,44,0.08) 100%)",
      },
      keyframes: {
        "ticker-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "slide-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "ticker-scroll": "ticker-scroll 14s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "ken-burns": "ken-burns 9s ease-out forwards",
        "slide-fade-in": "slide-fade-in 1s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
