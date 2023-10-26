#This guide assumes you are signed in to your GitHub account!

#Making Changes:
    * git pull
    * git add (affected files) (IntelliJ will add new files automatically)
    * git commit
    * git push

#Changing Branches:
    * git checkout <branch name>

#Merging Branch to Main:
    * git checkout main
    * git merge <branch name>
    
#Running the JavaScript Standard Linter:
    * (Navigate to frontend src directory)
    * npx standard <filename> (may prompt you for install)

#Testing the frontend:
    * (navigate to frontend directory)
    * npm start (should open browser window)