/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bb-grey': {
          200: '#f3f3f3',
          400: '#EAEAEA',
          600: '#2B2B2B',
        },
        'bb-blue': {
          200: '#323F4B',
          400: '#182B38',
        },
      },
    },
  },
  plugins: [],
}
