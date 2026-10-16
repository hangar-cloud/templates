# Go starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=go)

A Go server on the standard library's `net/http`, with graceful shutdown.

## How it runs on Hangar

- **Build:** The automatic builder detects `go.mod` and compiles a static binary with the Go version it names.
- **Start:** The binary, which listens on `PORT`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
go run .
```

## Make it yours

Fork this repository, edit `main.go` and create a service from your fork with the root directory `/go`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Go app](https://tryhangar.io/guides/deploy-go).
