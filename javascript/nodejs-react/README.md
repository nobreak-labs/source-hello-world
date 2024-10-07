# Node.Js + React

## Docker Image Build

```bash
docker build -t nodejs-react-app -f docker/Dockerfile .
```

## Docker Container Run

```bash
docker run -d --name nodejs-react-app -p 8080:8080 nodejs-react-app
```

## Application Access

```bash
http://localhost:8080
```