#!/usr/bin/env bash

# Example: deploy.sh "http:<RANCHER_URL>:<PORT>/v1/" "<PROJECT_NAME>" "<ENVIROMENT_KEY>" "<ENVIROMENT_SECRET>"

set -xe

cond(){
    if [ "$1" ] ; then
        echo "$2"
    else
        echo "$3"
    fi
}

rancher_exec(){
  local cmd host project key secret
  cmd=$1
  host=$2
  project=$3
  key=$4
  secret=$5

  rancher-compose --project-name $project --url $host --access-key $key --secret-key $secret --verbose $cmd
}

deploy(){
  local host project key secret
  host=$1
  project=$2
  key=$3
  secret=$4

  rancher_exec "create" $host $project $key $secret
  rancher_exec "start" $host $project $key $secret
}

main(){
  local HOST PROJECT KEY SECRET
  HOST=$(cond "$HOST" "$HOST" "$1")
  PROJECT=$(cond "$PROJECT" "$PROJECT" "$2")
  KEY=$(cond "$KEY" "$KEY" "$3")
  SECRET=$(cond "$SECRET" "$SECRET" "$4")

  deploy $HOST $PROJECT $KEY $SECRET
}

main "$@"

