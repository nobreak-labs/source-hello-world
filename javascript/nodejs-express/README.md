# Node.js + Express

## Docker Image Build

```bash
docker build -t nodejs-express-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name my-express-app -p 8080:3000 nodejs-express-app
```

## Application Access

```bash
http://localhost:8080
```