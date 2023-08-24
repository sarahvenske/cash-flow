#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn build
yarn build-css
yarn typeorm migration:run -d src/data-source.ts
