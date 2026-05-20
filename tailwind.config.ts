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
        background: "#0F172A",
        foreground: "#ffffff",
        scarlet: {
          500: "#DC2626",
          600: "#B91C1C",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'holographic': '0 0 15px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(6, 182, 212, 0.2)',
        'holographic-hover': '0 0 25px rgba(6, 182, 212, 0.6), inset 0 0 25px rgba(6, 182, 212, 0.4)',
        'neon-red': '0 0 10px rgba(220, 38, 38, 0.6), 0 0 20px rgba(220, 38, 38, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
