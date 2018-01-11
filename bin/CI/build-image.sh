#!/usr/bin/env bash

VERSION=$1
IMAGE_NAME=madoos/blog-api:$VERSION

echo "Building $IMAGE_NAME"

docker build -t $IMAGE_NAME .