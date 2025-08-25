#!/bin/bash

set -e

# Install
yarn

# Depcheck
yarn depcheck

# Prettier
yarn prettier

# Lint
yarn lint

# Doc
yarn doc

# Build
yarn build

# Sitemap
yarn sitemap
