# Go + Gin

## Docker Image Build

```bash
docker build -t go-gin-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name go-gin-app -p 8080:8000 go-gin-app
```

## Application Access

```bash
http://localhost:8080
```