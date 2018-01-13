#!/usr/bin/env bash

VERSION=$1
IMAGE_NAME=madoos/blog-api:$VERSION

docker build -t $IMAGE_NAME .