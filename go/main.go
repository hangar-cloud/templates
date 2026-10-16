package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"runtime"
	"syscall"
	"time"
)

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
      <p>This Go server is live, built with %s.</p>
      <p>Edit <code>main.go</code> in your fork of <a href="https://github.com/hangar-cloud/templates">the starter</a> to make it yours.</p>
    </main>
  </body>
</html>`

func main() {
	// Hangar sets PORT to the port the service's domain routes to.
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /{$}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		fmt.Fprintf(w, page, runtime.Version())
	})
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	})

	server := &http.Server{Addr: "0.0.0.0:" + port, Handler: mux}

	// Hangar stops a container with SIGTERM before a new deploy takes over.
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()
	go func() {
		<-ctx.Done()
		shutdown, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		server.Shutdown(shutdown)
	}()

	log.Printf("Listening on http://0.0.0.0:%s", port)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
}
