import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        borderMove: "borderMove 4s linear infinite",
      },
      keyframes: {
        borderMove: {
          "0%": {
            borderColor: "#FF0000",
          },
          "25%": {
            borderColor: "#00FF00",
          },
          "50%": {
            borderColor: "#0000FF",
          },
          "75%": {
            borderColor: "#FFFF00",
          },
          "100%": {
            borderColor: "#FF0000",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
