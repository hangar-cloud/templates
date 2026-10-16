# Laravel starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=laravel)

The Laravel 13 skeleton trimmed to one page, served by FrankenPHP. Sessions and cache use files and the queue runs inline, so it starts without a database.

## How it runs on Hangar

- **Build:** The automatic builder detects Laravel, installs the PHP extensions it needs and runs `composer install`.
- **Start:** FrankenPHP serves `public/` on `PORT`.
- **Health check:** `/up` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Add a database

Create a PostgreSQL or MySQL database in the same project and set the service's `DATABASE_URL` (or `DB_URL`) to its internal connection URL: it becomes the default connection. Set the pre-deploy command to `php artisan migrate --force` to migrate on every deploy. Set `APP_KEY` too (`php artisan key:generate --show`), so sessions survive a deploy.

## Run it locally

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

## Make it yours

Fork this repository, edit `routes/web.php` and create a service from your fork with the root directory `/laravel`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Laravel app](https://tryhangar.io/guides/deploy-laravel).
