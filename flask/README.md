# Flask starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=flask)

A Flask app served by gunicorn.

## How it runs on Hangar

- **Build:** The automatic builder detects Flask and installs `requirements.txt` with pip.
- **Start:** `gunicorn --bind 0.0.0.0:$PORT main:app`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
flask --app main run --debug
```

## Make it yours

Fork this repository, edit `main.py` and create a service from your fork with the root directory `/flask`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Flask app](https://tryhangar.io/guides/deploy-flask).
