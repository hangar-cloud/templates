# Next.js starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=nextjs)

A Next.js app with the App Router, rendered on the server on each request.

## How it runs on Hangar

- **Build:** The automatic builder detects Next.js, runs `npm ci` and `npm run build`.
- **Start:** `npm run start` runs `next start`, which listens on `PORT`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
npm install
npm run dev
```

## Make it yours

Fork this repository, edit `app/page.js` and create a service from your fork with the root directory `/nextjs`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Next.js app](https://tryhangar.io/guides/deploy-nextjs).
