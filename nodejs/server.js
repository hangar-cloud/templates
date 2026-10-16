import { createServer } from "node:http";

// Hangar sets PORT to the port the service's domain routes to.
const port = Number(process.env.PORT ?? 3000);

const page = `<!doctype html>
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
      <p>This Node.js ${process.versions.node} server is live.</p>
      <p>Edit <code>server.js</code> in your fork of <a href="https://github.com/hangar-cloud/templates">the starter</a> to make it yours.</p>
    </main>
  </body>
</html>`;

const server = createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("ok");
    return;
  }
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(page);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Listening on http://0.0.0.0:${port}`);
});

// Hangar stops a container with SIGTERM before a new deploy takes over.
process.on("SIGTERM", () => server.close(() => process.exit(0)));
