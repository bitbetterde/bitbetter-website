# bitbetter-website

> This is the repository containing code and content for the website of bitbetter GmbH ([bitbetter.de](https://bitbetter.de)). It is a website that only returns static HTML built from React components, using the [Astro static site generator](https://astro.build/).

## Dev Setup

1. Make sure you have `node` installed (for specific version see `.nvmrc`)
2. Clone the repository and change into the newly created folder
3. Run `npm i` to install all dependencies
4. Run `npm run dev` for local development server (see console output for URL)

## Deployment

This page is automatically deployed to GitHub pages, when a branch is merged to `main`. See [`deploy.yml`](.github/workflows/deploy.yml) for more details.
