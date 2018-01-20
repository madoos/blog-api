#!/usr/bin/env bash

docker run \
--privileged \
--rm \
-e NPM_COMMAND=test \
-v `pwd`:/workspace \
redpandaci/npm-command-runner:1.2.0