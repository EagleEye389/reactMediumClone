# Application is created using react js .
> ``npm run dev-server``   =>  To launch the application.

# We are using the api exposed by gothinkster project.
 > https://github.com/gothinkster/realworld/blob/master/api by

# Deployed this application on Heroku
 > https://mediumtoshareideas.herokuapp.com/
## Steps I have followed 
> Need to create a server file which can serve our final content.
> We cannot use webpack-dev-server to deploy the things.
> Install express use this command
    ``sh 
      npm i -s express
    ``
 #Create a server.js file at root level and paste below content in it
   ``node 
   const express = require('express')
   const app = express()
   const path = require('path')
   const port = process.env.PORT || 3001
   app.use(express.static(path.join(__dirname, 'dist')))
   app.listen(port, () => console.log("Listening on Port", port)) 
  ``
  > Final output is delivered in dist folder by webpack and same we are mentioning in server file.
  #Add following in package.json file in script tag: 
   ``node 
     scripts: {
            dev-server: webpack-dev-server --open,
            start: webpack -p && node server.js,
            build: webpack -p,
            heroku-postbuild: "npm run build
     }
     ``
 >  Commit everything in git.
 >  Install heroku cli
 >  Login in heroku
 >   Create git in heroku :  
     ``heroku create application_name``
 >   Now push to heroku git.
     ``git push heroku master``
 >   Application deployed on heroku in case any issue the check on heroku cli

# Heroku login
 > ``sh 
    heroku login
    ``
## Heroku apps 
 >  It will provide application name which are running in heroku
   ``sh 
    heroku apps
    ``
  > Heroku Logs 
  ``sh 
   heroku logs --tail --app application_name
   ``

# If any suggestion or bug kindly report on the 
> deepak15.gupta15@gmail.com

