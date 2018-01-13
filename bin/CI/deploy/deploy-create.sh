#!/usr/bin/env bash

rancher-compose  --project-name api-blog \
  --url http://163.172.182.214:8080/v1/ \
  --access-key 885B5B6B02D06E03B584 \
  --secret-key sj9gs3JUzXJGR9jYN63v5XpCUuVTWhMrzncJPprm \
  --verbose create

rancher-compose  --project-name api-blog \
  --url http://163.172.182.214:8080/v1/ \
  --access-key 885B5B6B02D06E03B584 \
  --secret-key sj9gs3JUzXJGR9jYN63v5XpCUuVTWhMrzncJPprm \
  --verbose start