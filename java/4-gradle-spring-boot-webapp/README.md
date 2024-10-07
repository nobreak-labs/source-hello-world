# Java + Gradle + Spring Boot + Webapp

## Docker Image Build

```bash
docker build -t gradle-spring-boot-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name gradle-spring-boot-app -p 8080:8080 gradle-spring-boot-app
```

## Application Access

```bash
http://localhost:8080
```