#!/bin/bash

Repos=("sample-shell" "pilet-esbuild" "pilet-parcel" "pilet-webpack4" "pilet-webpack5")

for Repo in "${Repos[@]}"
do
  cd $Repo
  npm i
  npm run build
  cd ..
done
