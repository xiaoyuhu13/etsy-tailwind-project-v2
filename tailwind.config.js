/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
    theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    borderRadius: {
      sm: "0.5rem",
      md: "1rem",
      lg: "2rem",
      full: "9999px",
    },
    boxShadow: {
      sm: "0px 0px 10px 2px rgba(57, 65, 77, 0.25)",
      md: "0px 0px 16px 4px rgba(57, 65, 77, 0.25)",
      lg: "0px 0px 20px 6px rgba(57, 65, 77, 0.25)",
    },
    extend: {
      spacing: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.5rem",
        6: "2.25rem",
        7: "3rem",
        8: "4.5rem",
      },
      /* realized some colors in the stylesheet are only used once or twice in the design,so I didn't add them here*/
      colors: {
        "blue-light": "#d7e6f4",
        "hover-button": "#efefef",
        "hover-subscribe": "#808080",
        "hover-text": "#595959",
        "text-main": "#222222",
        "text-secondary": "#595959",
      },
      gridTemplateRows: {
        // Simple 7 row grid
        7: "repeat(7, minmax(0, 1fr))",
        // Complex site-specific row configuration
        collections: "2fr 3fr 3fr",
        fathersday: "4rem 7rem 7rem 2rem",
        decor: "1fr 1fr 1fr",
        curated: "auto 6.5rem 6.5rem auto",
        nav: "2fr 1fr",
      },
      gridTemplateColumns: {
        "fathers-day-sm": "1.5fr 1.5fr 2fr 1.5fr 1.5fr",
        "fathers-day-lg": "3fr 2fr 1fr 3fr",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}

