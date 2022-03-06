# Install Node
```
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash

npm init
npm install express --save

docker build -t pmassilon/node-express:latest . -f Dockerfile.prod
```

# Build
`docker build -t pmassilon/node-express:latest .`

## Another Dockerfile
`docker build -t pmassilon/node-express:latest . -f Dockerfile.prod`

# Run
`docker run --rm --name node -d -p 8080:80 pmassilon/node-express`

# Explore
`docker run --rm --name node -it -p 8080:80 pmassilon/node-express bash`

# Logs
`docker logs node`
