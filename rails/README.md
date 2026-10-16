# Ruby on Rails starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=rails)

A small Rails 8 app with Active Record, on PostgreSQL when the service has `DATABASE_URL` and on SQLite in the container until then.

## How it runs on Hangar

- **Build:** The automatic builder detects Ruby from the `Gemfile` and `.ruby-version` and runs `bundle install`.
- **Start:** The `Procfile`: `bin/rails server` on `PORT`, in `RAILS_ENV`, or `production` when it is not set.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Add a database

Create a PostgreSQL database in the same project and set the service's `DATABASE_URL` to its internal connection URL. Rails reads it over `config/database.yml`, and the page shows the server version. Set `SECRET_KEY_BASE` too (`bin/rails secret`), so sessions survive a deploy.

## Run it locally

```bash
bundle install
bin/rails server
```

## Make it yours

Fork this repository, edit `app/views/home/index.html.erb` and create a service from your fork with the root directory `/rails`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Ruby on Rails app](https://tryhangar.io/guides/deploy-rails).
