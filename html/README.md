# HTML + JavsScript + CSS

## Docker Image Build

```bash
docker build -t html-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name html-app -p 8080:8080 html-app 
```

## Application Access

```bash
http://localhost:8080
```