#!/usr/bin/env bash

VERSION=$1
IMAGE_NAME=madoos/blog-api:$VERSION

docker push $IMAGE_NAME