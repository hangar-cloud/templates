# Django with PostgreSQL starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=django-postgres)

A Django project served by gunicorn, on PostgreSQL when the service has `DATABASE_URL` and on SQLite in the container until then.

## How it runs on Hangar

- **Build:** The automatic builder detects Django and installs `requirements.txt` with pip.
- **Start:** `python manage.py migrate && gunicorn mysite.wsgi:application`, on `PORT`. Migrations run on every deploy.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Add a database

Create a PostgreSQL database in the same project and set the service's `DATABASE_URL` to its internal connection URL. The next deploy migrates it, and the page shows the server version. Set `SECRET_KEY` too, so sessions survive a deploy.

## Run it locally

```bash
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Make it yours

Fork this repository, edit `mysite/views.py` and create a service from your fork with the root directory `/django-postgres`. Every push then deploys again.

The full walkthrough is in the guide [Deploy Django with PostgreSQL](https://tryhangar.io/guides/deploy-django-postgres).
