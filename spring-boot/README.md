# Spring Boot starter

[![Deploy on Hangar](https://tryhangar.io/deploy-on-hangar.svg)](https://tryhangar.io/deploy?repo=https%3A%2F%2Fgithub.com%2Fhangar-cloud%2Ftemplates&dir=spring-boot)

A Spring Boot 4 web app built with Maven, on Java 21.

## How it runs on Hangar

- **Build:** The automatic builder detects Maven and builds the jar with JDK 21.
- **Start:** `java -jar` with `server.port` set to `PORT`.
- **Health check:** `/health` answers 200.
- **Port:** Hangar sets `PORT` (3000 by default) and the app listens on it, on `0.0.0.0`.

## Run it locally

```bash
mvn spring-boot:run
```

## Make it yours

Fork this repository, edit `src/main/java/io/tryhangar/starter/Application.java` and create a service from your fork with the root directory `/spring-boot`. Every push then deploys again.

The full walkthrough is in the guide [Deploy a Spring Boot app](https://tryhangar.io/guides/deploy-spring-boot).
