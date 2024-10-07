# Java + Maven + Spring Boot + Webapp

## Docker Image Build

```bash
docker build -t maven-spring-boot-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name maven-spring-boot-app -p 8080:8080 maven-spring-boot-app
```

## Application Access

```bash
http://localhost:8080
```