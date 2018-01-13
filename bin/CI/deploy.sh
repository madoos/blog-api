#!/usr/bin/env bash

set -xe

cond() {
    if [ "$1" ] ; then
        echo "$2"
    else
        echo "$3"
    fi
}

# env: VERSION, RANCHER_URL, RANCHER_KEY RANCHER_SECRET
# bash: $1(VERSION) $2(RANCHER_URL) $3(RANCHER_URL) $4(RANCHER_URL)

# example ./bin/CI/deploy.sh 0.0.1 http://163.172.182.214:8080/v1/ 885B5B6B02D06E03B584 sj9gs3JUzXJGR9jYN63v5XpCUuVTWhMrzncJPprm

VERSION=$(cond "$VERSION" "$VERSION" "$1")
RANCHER_URL=$(cond "$RANCHER_URL" "$RANCHER_URL" "$2")
RANCHER_KEY=$(cond "$RANCHER_KEY" "$RANCHER_KEY" "$3")
RANCHER_SECRET=$(cond "$RANCHER_SECRET" "$RANCHER_SECRET" "$4")

PROJECT_NAME="blog-api"
IMAGE="madoos/blog-api:$VERSION"
IMAGE_LATEST="madoos/blog-api:latest"

RELEASE_BRANCH=$(git rev-parse --abbrev-ref HEAD)
COMMIT_MSG="New: Release to $TAG"


# BUILD IMAGES
echo "BUILDING IMAGES: $IMAGE, $IMAGE_LATEST"

docker build -t $IMAGE .
docker push $IMAGE
docker rmi -f $IMAGE

docker build -t $IMAGE_LATEST .
docker push $IMAGE_LATEST
docker rmi -f $IMAGE_LATEST

# CREATE CHANGELOG
echo "CREATING CHANGELOG"

npm version --no-git-tag-version $VERSION
npm run changelog

## UPDATE BRANCHES

echo "UPDATING BRANCHES"

git add .
git commit -m "$COMMIT_MSG"
git tag -a $TAG -m "$COMMIT_MSG"

git checkout develop
git merge $RELEASE_BRANCH
git checkout master
git merge $RELEASE_BRANCH
git push origin develop
git push origin master

git push --tags
git checkout $RELEASE_BRANCH

# DEPLOY

echo "DEPLOYING PROJECT: $PROJECT_NAME"

rancher-compose --project-name $PROJECT_NAME \
  --url $RANCHER_URL \
  --access-key $RANCHER_KEY \
  --secret-key $RANCHER_SECRET \
  up -d --force-upgrade --pull --confirm-upgrade

