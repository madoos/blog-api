#!/usr/bin/env bash

docker run \
--privileged \
-it \
--rm \
-e NPM_COMMAND=coveralls \
-v `pwd`:/workspace \
redpandaci/npm-command-runner:1.2.0