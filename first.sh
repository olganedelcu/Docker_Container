#!/bin/bash

# Create an index.html file in the host directory
mkdir -p /path/to/host/directory

# Create an index.html file in the host directory
echo "Hello, world!" > /path/to/Users/olga.nedelcu/index.html

# Run the nginx container, mounting the host directory as a volume and mapping port 80
docker run -d -p 80:80 -v /path/to/host/directory:/usr/share/nginx/html --name firstnginx nginx

echo "Hey, this is running! :) The Nginx container is running!"