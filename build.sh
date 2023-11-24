#!/usr/bin/env bash

./build-backend.sh;
cd ./bowl-mates-frontend || echo "failed to enter frontend directory";
npm install;