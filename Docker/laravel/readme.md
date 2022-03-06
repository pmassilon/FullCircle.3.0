# Build
`docker build -t pmassilon/laravel:latest .`
## Another Dockerfile
`docker build -t pmassilon/laravel:latest . -f Dockerfile.prod`

# Run
`docker run --rm -it -p 8080:80 pmassilon/laravel bash`

# Explore
`docker run --rm -d -p 8080:80 pmassilon/laravel`

# Logs
`docker logs laravel`


# Prod com Nginx
`docker network create laranet`
`docker run --rm -d --network laranet --name laravel pmassilon/laravel:prod`
`docker run --rm -d --network laranet --name nginx -p 8080:80 pmassilon/nginx:prod`
