/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bb-grey": {
          default: "#EAEAEA",
          200: "#F3F3F3",
          400: "#EAEAEA",
          500: "#2E2E2E",
          550: "#424242",
          600: "#2B2B2B"
        },
        "bb-blue": {
          default: "#182B38",
          200: "#323F4B",
          400: "#182B38"
        }
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        grotesk: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        "bb-3xl": ["2rem", { lineHeight: "140%", letterSpacing: "-1%", fontWeight: "500" }]
      }
    }
  },
  plugins: []
};
