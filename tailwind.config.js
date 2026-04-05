/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./context/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-syne)",    "ui-sans-serif",  "system-ui"],
        display: ["var(--font-display)", "Georgia",        "serif"],
        mono:    ["var(--font-mono)",    "ui-monospace",   "monospace"],
      },
      colors: {
        bg:      "var(--bg)",
        "bg-2":  "var(--bg-2)",
        "bg-3":  "var(--bg-3)",
        ink:     "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        acid:    "var(--acid)",
        border:  "var(--border)",
        surface: "var(--surface)",
      },
      animation: {
        marquee:    "marquee 28s linear infinite",
        "marquee-rev": "marquee-rev 28s linear infinite",
        scanline:   "scanline 6s linear infinite",
        grain:      "grain 8s steps(1) infinite",
      },
      keyframes: {
        marquee:        { from: { transform:"translateX(0)" },    to: { transform:"translateX(-50%)" } },
        "marquee-rev":  { from: { transform:"translateX(-50%)" }, to: { transform:"translateX(0)" } },
        scanline:       { "0%": { top:"-10%" }, "100%": { top:"110%" } },
        grain:          {
          "0%,100%": { transform:"translate(0,0)" }, "10%": { transform:"translate(-2%,-3%)" },
          "30%": { transform:"translate(-1%,3%)" },  "50%": { transform:"translate(-2%,2%)" },
          "70%": { transform:"translate(-3%,1%)" },  "90%": { transform:"translate(-1%,1%)" },
        },
      },
    },
  },
  plugins: [],
};
