import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Requested accent color (Tailwind alpha placeholder)
        fu: "rgb(218 255 1 / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(218 255 1 / 0.18), 0 0 24px rgb(218 255 1 / 0.16)",
        glowStrong:
          "0 0 0 1px rgb(218 255 1 / 0.22), 0 0 36px rgb(218 255 1 / 0.28)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.07) 1px, transparent 0)"
      }
    }
  },
  plugins: []
} satisfies Config;


