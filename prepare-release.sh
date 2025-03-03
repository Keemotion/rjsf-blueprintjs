#!/bin/bash

read -p "You are about to commit and push current changes with the release. Type (major/minor/patch) to proceed"$'\n' BUMP

if [[ "$BUMP" != "major" && "$BUMP" != "minor" && "$BUMP" != "patch" ]]; then
  echo "Wrong version. You can only type one of (major/minor/patch)"
  exit 0
fi

git checkout master

SEMVER_WITH_PREFIX=$(npm version --commit-hooks false --git-tag-version false "${BUMP}")
SEMVER="${SEMVER_WITH_PREFIX:1}"

read -p "You are about to bump the version to ${SEMVER} commit and push the changes. You can now edit the CHANGELOG.md or other files. Do you want to continue? (y/n): " CONFIRM

if [[ "$CONFIRM" != 'y' && "$CONFIRM" != 'Y' ]]; then
  echo "New version was not released. Be aware that changes to package.json and package-lock.json with new version were made."
  exit 0
fi

git add .
git commit -m "release ${SEMVER}"
echo "Release commit for version ${SEMVER} created"

git tag -a "${SEMVER}" -m "${SEMVER}"
echo "Tag for version ${SEMVER} created"

git push origin master
echo "Release commit for version ${SEMVER} pushed to remote"
git push origin "${SEMVER}"
echo "Tag for version ${SEMVER} pushed to remote"
