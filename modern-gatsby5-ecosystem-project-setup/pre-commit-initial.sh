#!/usr/bin/env sh

. "$(dirname -- "$0")/_/husky.sh"

echo "Runnig linting and fix..."

npm run lint:fix

git add .
