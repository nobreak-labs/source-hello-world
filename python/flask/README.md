# Python + Flask

## Docker Image Build

```bash
docker build -t flask-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name flask-app -p 8080:5000 flask-app
```

## Application Access

```bash
http://localhost:8080
```