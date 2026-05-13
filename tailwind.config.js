/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        overlay: "rgb(var(--color-overlay) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        subtle: "rgb(var(--color-subtle) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        love: "rgb(var(--color-love) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        rose: "rgb(var(--color-rose) / <alpha-value>)",
        pine: "rgb(var(--color-pine) / <alpha-value>)",
        foam: "rgb(var(--color-foam) / <alpha-value>)",
        iris: "rgb(var(--color-iris) / <alpha-value>)",
      },
      boxShadow: {
        blueprint: "0 24px 80px rgb(var(--color-shadow) / 0.34)",
        hover: "0 38px 100px rgb(var(--color-shadow) / 0.42), 0 16px 42px rgb(var(--color-foam) / 0.16), 0 0 0 1px rgb(var(--color-foam) / 0.18)",
        glow: "0 0 0 1px rgb(var(--color-text) / 0.08), 0 18px 60px rgb(var(--color-shadow) / 0.28)",
      },
    },
  },
  plugins: [],
};
