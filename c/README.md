# C

## Docker Image Build

### 1. Dockerfile-dynamic

```bash
docker build -t c-dynamic -f docker/Dockerfile-dynamic .
```

### 2. Dockerfile-dynamic-scratch

```bash
docker build -t c-dynamic-scratch -f docker/Dockerfile-dynamic-scratch .
```

### 3. Dockerfile-static

```bash
docker build -t c-static -f docker/Dockerfile-static .
```

### 4. Dockerfile-static-scratch

```bash
docker build -t c-static-scratch -f docker/Dockerfile-static-scratch .
```

## Docker Container Run

### 1. Dockerfile-dynamic

```bash
docker run -it c-dynamic 
```

### 2. Dockerfile-dynamic-scratch

```bash
docker run -it c-dynamic-scratch
```

### 3. Dockerfile-static
    
```bash
docker run -it c-static
```

### 4. Dockerfile-static-scratch

```bash
docker run -it c-static-scratch
```
