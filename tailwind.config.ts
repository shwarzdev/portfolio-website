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
        bg: "#0d0d0d",
        surface: "#141414",
        line: "#1f1f1f",
        line2: "#2a2a2a",
        fg: {
          DEFAULT: "#ededed",
          dim: "#9b9b9b",
          muted: "#5e5e5e",
          subtle: "#3a3a3a",
        },
        term: {
          green: "#7cf08e",
          cyan: "#7ad8e6",
          yellow: "#f0c674",
          red: "#ff6b6b",
          purple: "#c5a3ff",
          blue: "#82aaff",
          orange: "#ff8c42",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "Consolas", "monospace"],
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
