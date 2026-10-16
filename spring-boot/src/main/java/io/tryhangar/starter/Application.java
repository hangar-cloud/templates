package io.tryhangar.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootVersion;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {

  private static final String PAGE = """
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hello from Hangar</title>
          <style>
            body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #12100e; color: #f5f2eb; font-family: system-ui, sans-serif; }
            main { padding: 24px; text-align: center; }
            h1 { margin: 0 0 12px; font-size: 2.25rem; }
            p { margin: 6px 0; color: #a39e95; }
            a { color: #ff6a1a; }
          </style>
        </head>
        <body>
          <main>
            <h1>Hello from Hangar</h1>
            <p>This Spring Boot %s app is live, on Java %s.</p>
            <p>Edit <code>Application.java</code> in your fork of <a href="https://github.com/hangar-cloud/templates">the starter</a> to make it yours.</p>
          </main>
        </body>
      </html>
      """;

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
  public String home() {
    return PAGE.formatted(SpringBootVersion.getVersion(), Runtime.version().feature());
  }

  @GetMapping("/health")
  public String health() {
    return "ok";
  }
}
