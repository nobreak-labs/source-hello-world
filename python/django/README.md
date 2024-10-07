# Python + Django

## Docker Image Build

```bash
docker build -t django-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name django-app -p 8080:8000 django-app
```

## Application Access

```bash
http://localhost:8080
```