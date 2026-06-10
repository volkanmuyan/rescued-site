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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Design tokens
        cream: {
          DEFAULT: "#FAF8F2",
          dark: "#F4F1E8",
        },
        olive: {
          light: "#A3B47C",
          DEFAULT: "#8D9E5B",
          dark: "#6B7A43",
        },
        mustard: {
          DEFAULT: "#E0A458",
        },
        terracotta: {
          DEFAULT: "#D77A61",
        },
        ink: {
          DEFAULT: "#2E3325",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(46,51,37,0.08)",
        "soft-lg": "0 8px 40px rgba(46,51,37,0.12)",
        "soft-xl": "0 16px 64px rgba(46,51,37,0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
