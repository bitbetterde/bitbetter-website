/** @type {import("tailwindcss").Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bb-grey': {
          default: '#EAEAEA',
          200: '#F3F3F3',
          400: '#EAEAEA',
          500: '#2E2E2E',
          550: '#424242',
          600: '#2B2B2B',
        },
        'bb-blue': {
          default: '#182B38',
          200: '#323F4B',
          400: '#182B38',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        grotesk: ['Space Grotesk Variable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'bb-3xl': ['2rem', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' }],
        'bb-4xl': ['2.5rem', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' }],
      },
      gridTemplateColumns: {
        inner: 'repeat(13, minmax(0, 1fr))',
        outer: '1fr min(1500px, 100%) 1fr',
      },
      gridColumn: {
        'span-inner': '2/-2',
      },
      typography: ({ theme }) => ({
        'bb-grey': {
          css: {
            '--tw-prose-body': theme('colors["bb-grey"][600]'),
            '--tw-prose-headings': theme('colors["bb-grey"][900]'),
            '--tw-prose-lead': theme('colors["bb-grey"][700]'),
            '--tw-prose-links': theme('colors["bb-grey"][900]'),
            '--tw-prose-bold': theme('colors["bb-grey"][900]'),
            '--tw-prose-counters': theme('colors["bb-grey"][600]'),
            '--tw-prose-bullets': theme('colors["bb-grey"][400]'),
            '--tw-prose-hr': theme('colors["bb-grey"][300]'),
            '--tw-prose-quotes': theme('colors["bb-grey"][900]'),
            '--tw-prose-quote-borders': theme('colors["bb-grey"][300]'),
            '--tw-prose-captions': theme('colors["bb-grey"][700]'),
            '--tw-prose-code': theme('colors["bb-grey"][900]'),
            '--tw-prose-pre-code': theme('colors["bb-grey"][100]'),
            '--tw-prose-pre-bg': theme('colors["bb-grey"][900]'),
            '--tw-prose-th-borders': theme('colors["bb-grey"][300]'),
            '--tw-prose-td-borders': theme('colors["bb-grey"][200]'),
          },
        },
        DEFAULT: {
          css: {
            'code::before': {
              content: '"" !important',
            },
            'code::after': {
              content: '"" !important',
            },
            blockquote: {
              'font-style': 'normal',
              'font-weight': 500,
              'font-size': '1.5rem',
              '& *::before': {
                content: 'normal !important',
              },
              '& *::after': {
                content: 'normal !important',
              },
              '& cite': {
                'font-style': 'normal',
                'font-family': 'IBM Plex Sans',
                'font-weight': 600,
                'font-size': '1.25rem',
                display: 'inline-block !important',
                'padding-top': '1rem !important',
                'margin-top': '2rem',
                'border-top': '1.5px solid black !important',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
