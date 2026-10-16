# Build stage: compile a static binary.
FROM golang:1.23-alpine AS build
WORKDIR /src
COPY go.mod ./
COPY *.go ./
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /app .

# Run stage: only the binary, on a minimal image.
FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /app /app
# Hangar sets PORT at runtime; 3000 is the default when it does not.
ENV PORT=3000 BUILT_FROM=dockerfile
EXPOSE 3000
ENTRYPOINT ["/app"]
