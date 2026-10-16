# Astro starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=astro)

A static Astro site, served with compression and clean URLs.

## How it runs on Hangar

- **Build:** The automatic builder detects Astro, runs `npm ci` and `npm run build`.
- **Start:** Caddy serves `dist/` on `PORT`.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
npm install
npm run dev
```

## Make it yours

Fork this repository, edit `src/pages/index.astro` and create a service from your fork with the root directory `/astro`. Every push then deploys again.

The full walkthrough is in the guide [Deploy an Astro site](https://tryhangar.io/guides/deploy-astro).
