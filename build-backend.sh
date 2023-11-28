#!/usr/bin/env bash

cd ./bowl-mates-backend || echo "failed to enter backend dir";
./gradlew clean;
./gradlew build;
cd ..;