# Bowl-Mates  
## Beta v1.0.0

## How to Build and Test System:
* ### System automatically builds and tests on pushes/merges to main and production
* ### To Manually Build:
  * Gradle -> Tasks -> build -> clean
  * Gradle -> Tasks -> build -> build
* ### To Manually Test:
  * Backend: Gradle -> Tasks -> verification -> check
  * Frontend:
    * (in terminal) npm start
    * Manually verify function of UI components (further instructions in progress)

## How to Run the System:
* ### Production version is currently running at bowlmates.me
* ### To Run in your branch:
  * Backend: Gradle -> Tasks -> application -> bootRun  
        OR bowl-mates-backend -> src -> main -> java -> me.bowlmates.bowlmatesbackend -> BowlMatesBackendApplication
  * Frontend: npm start

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
    * JS FrontendTest files
    * Webpage assets
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
  * Springboot 3.1.5
  * MySQL 8.0.35
  * TypeScript 4.9.5
  * NodeJS 20.8.9
  * ReactJS 18.2.32
