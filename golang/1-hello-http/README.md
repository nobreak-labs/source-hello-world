# Go + HTTP

## Docker Image Build

```bash
docker build -t go-webapp -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name go-webapp -p 8080:3000 go-webapp
```

## Application Access

```bash
http://localhost:8080
```