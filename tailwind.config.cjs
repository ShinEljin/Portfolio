/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1500px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        "primary-main": "#0080ff",
        "secondary-main": "#FFA000",
        "dark-text-primary": "#e4e6eb",
        "dark-text-secondary": "#b0b3b8",
        "dark-bg-main": "#18191A",
        "dark-bg-neutral": "#242526",
        "dark-bg-neutral-lighter": "#3a3b3c",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
