/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        oat: "#f4ede4",
        sand: "#d7c2a8",
        bark: "#5d4635",
        ember: "#a65f4b",
        moss: "#79856d"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px rgba(70, 46, 29, 0.12)"
      }
    }
  },
  plugins: []
};