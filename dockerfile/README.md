# Dockerfile starter

A small Go server built by a multi-stage Dockerfile into a distroless image of about 3 MB.

## How it runs on Hangar

- **Build:** Set the service's build type to **Dockerfile**: Hangar runs `docker build` on this folder. The automatic builder would also build the Go code, and the page says which one ran.
- **Start:** The image's `ENTRYPOINT`, which listens on `PORT`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Deploy it

Create a service from `https://github.com/hangar-cloud/templates`, set its root directory to `/dockerfile` and its build type to **Dockerfile**, then deploy. The one-click button builds with the automatic builder, so this starter does not offer it.

## Run it locally

```bash
docker build -t hangar-dockerfile-starter .
docker run -p 3000:3000 hangar-dockerfile-starter
```

## Make it yours

Fork this repository, edit `Dockerfile` and create a service from your fork with the root directory `/dockerfile`. Every push then deploys again.

The full walkthrough is in the guide [Deploy any app with a Dockerfile](https://tryhangar.io/guides/deploy-dockerfile).
