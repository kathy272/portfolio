/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F9F3EF",
        secondary: "#2B2B29",
        tertiary: "#363636",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "contact": "url('/src/assets/background_01.png')",
        "about": "url('/src/assets/background_02.png')",
        "small": "url('/src/assets/bg_small.png')",
        "tideUp": "url('/TideUp/tideUp_background.png')",
        "rte1": "url('/rte/rte_textbg.png')",
        "rte2": "url('/rte/rte_textbg2.png')",
        "arcane": "url('/ArcaneMind/am_bg.png')",
        "wunden": "url('/Wunden/bg.png')",


      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards"

      },
      keyframes: {
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        }
      },
      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
      },
    },
  },
  plugins: [],
};