import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1115",
        inkraised: "#171A20",
        paper: "#EDEAE2",
        papermuted: "#DFDBCF",
        layer: {
          frontend: "#6C8EFF",
          backend: "#34D399",
          data: "#F5A623",
          mobile: "#F472B6",
          infra: "#8B8FA3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
