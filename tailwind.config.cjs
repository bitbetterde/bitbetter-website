/** @type {import("tailwindcss").Config} */

module.exports = {
  theme: {
    extend: {
      typography: () => ({
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
}
