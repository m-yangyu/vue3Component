#!/usr/bin/env sh

git checkout master
git pull origin master

VERSION=`npx select-version-cli`

read -p "当前发布的版本为 $VERSION ， 你确定吗? (y/n)" ANSWER

read -p "是否发布为beta版本？(y/n)" ISTAG

echo $ANSWER

if [[ $ANSWER =~ ^[Yy]$ ]]
then

echo "publish version is $VERSION"

# eslint
npm run lint

# test
npm run test

# build
npm run build

# publish
if [[ $ISTAG =~ ^[Yy]$  ]]
then
npm publish --tag beta
else
npm publish
fi
# 
fi