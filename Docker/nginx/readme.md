# Build
`docker build -t pmassilon/nginx-with-vim:latest .`
## Another Dockerfile
`docker build -t pmassilon/nginx-with-vim:latest . -f Dockerfile.prod`

# Run
`docker run --rm --name nginx -d -p 8080:80 pmassilon/nginx-with-vim`

# Explore
`docker run --rm --name nginx -it -p 8080:80 pmassilon/nginx-with-vim bash`

# Logs
`docker logs nginx`

# Prod conf
Define nginx/nginx.conf
