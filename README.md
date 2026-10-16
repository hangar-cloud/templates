# Hangar starters

Minimal apps that deploy on [Hangar](https://tryhangar.io) in one click. Each folder is a working starter that builds with no configuration and serves a "Hello from Hangar" page on its own URL with HTTPS.

| Starter | What it is | Deploy |
| --- | --- | --- |
| [Next.js](nextjs) | A Next.js app with the App Router, rendered on the server on each request. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=nextjs) |
| [Django with PostgreSQL](django-postgres) | A Django project served by gunicorn, on PostgreSQL when the service has `DATABASE_URL` and on SQLite in the container until then. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=django-postgres) |
| [Dockerfile](dockerfile) | A small Go server built by a multi-stage Dockerfile into a distroless image of about 3 MB. | Dockerfile build type |
| [Ruby on Rails](rails) | A small Rails 8 app with Active Record, on PostgreSQL when the service has `DATABASE_URL` and on SQLite in the container until then. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=rails) |
| [Laravel](laravel) | The Laravel 13 skeleton trimmed to one page, served by FrankenPHP. Sessions and cache use files and the queue runs inline, so it starts without a database. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=laravel) |
| [FastAPI](fastapi) | A FastAPI app served by uvicorn, with its interactive API docs at `/docs`. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=fastapi) |
| [Node.js](nodejs) | A Node.js server on the built-in `http` module, with no dependencies. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=nodejs) |
| [Go](go) | A Go server on the standard library's `net/http`, with graceful shutdown. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=go) |
| [Spring Boot](spring-boot) | A Spring Boot 4 web app built with Maven, on Java 21. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=spring-boot) |
| [Flask](flask) | A Flask app served by gunicorn. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=flask) |
| [Astro](astro) | A static Astro site, served with compression and clean URLs. | [![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=astro) |

## How the button works

The button opens `https://tryhangar.io/deploy` with this repository and the starter's folder. Hangar creates a project, gives the service an address with HTTPS and deploys the folder. Without an account you sign up first and come straight back.

Every starter follows the same rules, so the automatic builder runs it as it is:

- it listens on `PORT`, which Hangar sets (3000 by default), on `0.0.0.0`;
- it starts without a database, and the ones that use one read `DATABASE_URL` when it is set;
- it pins its runtime version, so a build does not change under you.

## Make one yours

Fork this repository and create a service from your fork, with the root directory set to the starter's folder. Every push to the fork then deploys again.

## License

MIT. See [LICENSE](LICENSE).
