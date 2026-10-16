# FastAPI starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=fastapi)

A FastAPI app served by uvicorn, with its interactive API docs at `/docs`.

## How it runs on Hangar

- **Build:** The automatic builder detects FastAPI and installs `requirements.txt` with pip.
- **Start:** `uvicorn main:app --host 0.0.0.0 --port $PORT`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Make it yours

Fork this repository, edit `main.py` and create a service from your fork with the root directory `/fastapi`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a FastAPI app](https://tryhangar.io/guides/deploy-fastapi).
