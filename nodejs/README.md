# Node.js starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=nodejs)

A Node.js server on the built-in `http` module, with no dependencies.

## How it runs on Hangar

- **Build:** The automatic builder detects Node.js, uses the version in `engines` and runs `npm ci`.
- **Start:** `npm run start`, which runs `node server.js` on `PORT`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
npm start
```

## Make it yours

Fork this repository, edit `server.js` and create a service from your fork with the root directory `/nodejs`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Node.js app](https://tryhangar.io/guides/deploy-nodejs).
