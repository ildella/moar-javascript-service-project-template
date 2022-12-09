#!/bin/bash

set -euo pipefail

version=$(< "package.json" jq -r .version)
tag=v$version

echo releasing "$tag"

# https://cli.github.com/manual/gh_release_create
gh release create "$tag"
