import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#faf8f3",
          100: "#f4f1ea",
          200: "#ebe5d6",
          300: "#dcd2bc",
          400: "#c5b89a",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#1a1a1a",
          muted: "#6b6258",
        },
        accent: {
          DEFAULT: "#c2410c",
          dark: "#9a3412",
          light: "#ea580c",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
    },
  },
  plugins: [],
};
export default config;
