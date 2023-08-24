// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn build
yarn build-css
yarn typeorm migration:run -d dist/data-source
