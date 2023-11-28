#!/usr/bin/env bash

cd ./bowl-mates-frontend || echo "failed to end frontend directory";
npm install;
npm start || cd ..;
cd ..;
