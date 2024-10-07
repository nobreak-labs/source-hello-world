# Java + Maven + Servlet

## Docker Image Build

```bash
docker build -t maven-servlet-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name maven-servlet-app -p 8080:8080 maven-servlet-app
```

## Application Access

```bash
http://localhost:8080
```