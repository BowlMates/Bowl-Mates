# Bowl-Mates
#### Early Access v2.0.0
BowlMates is a unique dining app that specializes in connecting people for dining experiences based on restaurant preferences and availability. Utilizing a full-stack approach with React, MySQL, and Node.js, the app seeks to offer a user-friendly experience while facilitating meaningful social connections through shared meals in your area.

## Features
 * Accept/reject matches
 * Save your favorite restaurants
 * Set your dining availability in two-hour increments
 * Matching algorithm by having the same favorite restaurants + availability
 * Chat with your matches
 * User authentication
 * Intuitive, user-friendly interface to ensure ease of use for both novice and experienced users

## Outside Resources
* ### Bowlmates User Manual
  * https://docs.google.com/document/d/1XaWdXT156YKWg6wizoMOhZdTV7eUF3p0ckaLsWxtqPk/edit?usp=sharing
* ### Bowlmates Living Document
  * https://docs.google.com/document/d/1s8vvfJqxqnsePnGVFLLxlHJLX_QCBa6_yk7jYLvBLpw/edit?usp=sharing
* ### Developer Guidelines
  * https://docs.google.com/document/d/1vekN4H6lccm73DYur62gEpSALbmktFXKYdsQMYk2yRs/edit?usp=sharing
* ### Bowlmates Bug Tracker (Form)
  * https://docs.google.com/forms/d/e/1FAIpQLSd9PnUsYVFg4WBpGVpfx50mFsphlle9J71hSRMwnM3gbcExkw/viewform?usp=sharing
* ### Bowlmates Bug Tracker (Results)
  * https://docs.google.com/spreadsheets/d/1hyxpv_1DRpXxKBSFBCRmRMxyubDUxN6RGQQbwUv7BUA/edit?usp=sharing

## How to Build and Test System:
* ### DISCLAIMER: Unknown Behavior on Unbuntu Operating Systems
* ### System automatically builds and tests on pushes/merges to main and production
* ### To Manually Build:
  * From root directory: ./build.sh
* ### To Manually Test:
  * From root directory: ./test.sh
  * Frontend:
    * (in terminal) npm start
    * Manually verify function of UI components (further instructions in progress)

## How to Run the System:
* ### Production version is currently running at bowlmates.me
* ### How to run locally - HIGHLY RECOMMENDED: DOCKER
  * Install Docker Desktop
  * Navigate to the root of the repository (docker-compose.yaml should be at the same level in this directory)
  * Run "docker compose up" in the terminal
  * Navigate to localhost:3000 to access the website
* ### How to run locally - WHEN ACTIVELY DEVELOPING: To Run in your branch:
  * Backend: ./run-backend.sh 
        OR bowl-mates-backend -> src -> main -> java -> me.bowlmates.bowlmatesbackend -> BowlMatesBackendApplication
  * Frontend: ./run-frontend.sh  
  Note: Running these concurrently will require separate terminal instances

## Repository Layout:
* ### bowl-mates-backend
  * Gradle files
  * Documentation (as web pages from JavaDocs)
  * src
    * Spring Server program
    * Backend Java Classes
    * Backend Java Class Tests
  * target
    * Spring Classes
  * Docker files
* ### bowl-mates-frontend
  * Node modules
  * public
    * Webpage assets
  * src
    * data-types (JS classes to parallel Java classes)
    * hooks (React hooks - self explanatory)
    * images (self explanatory)
    * index-components (Various pages and their components)
    * tests (React components for quick testing)
    * Additional webpage assets
  * Docker files
* ### Guides
  * Guides for Git, Node, etc.
* ### weekly status reports
  * self-explanatory

## Collaborators:

* Daniel Johnson
* Stephen Cushing
* Timothy Dillon
* Cade Dillon
* Geoffrey Aldrich
* Jasper Balinas

## Version Info:

  * JDK 21.0.1
  * Gradle 8.3
  * Springboot 3.1.5
  * MySQL 8.0.35
  * TypeScript 4.9.5
  * NodeJS 20.8.9
  * ReactJS 18.2.32
