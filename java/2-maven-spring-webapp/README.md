# Java + Maven + Spring + Webapp

## Docker Image Build

```bash
docker build -t maven-spring-webapp -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name maven-spring-webapp -p 8080:8080 maven-spring-webapp
```

## Application Access

```bash
http://localhost:8080
```