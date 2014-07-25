admin-frontend
================

## Steps to install and run
Perform these steps outside vagrant to take advantage of livereload. Instructions use brew for package management.

### Install nodejs and npm
`brew install node`

###Install yeoman for Grunt and Bower
`sudo npm install -g yo`

###Install grunt-cli
`sudo npm install -g grunt=-cli

###Clone this repository
`git clone [this repo] .`

`cd admin-frontend`

###Install packages/dependencies defined in package.json
`sudo npm install`

###Install bower components
`bower install`

###Run using grunt
`grunt serve`

This will run a development server on port 9002.

## Development

### Testing with development backend

Modify the config/environments/development.json file with the proper URLs. This file is used to set values in app/scripts/services/config.js.

####Auto-reload goodness
Any changes made to html, javascript, or less files will auto-reload the code, and refresh the browser (huzzah!).

## Testing

- npm install should've installed numerous packages related to karma
- the underlying testing framework is jasmine, and the test runner is karma
- unit test configuration is specified in karma-unit.conf.js

### Run unit tests
`grunt test:unit`

This is used as a pre-build step (`grunt build` will automatically run these tests).

## Steps to build and deploy

### Build application
`grunt build:develop`

This compiles, minifies, replaces asset refs, etc. and copies all the files into another directory, in our case "dist." It will also run unit and e2e tests, and the build will fail if the tests don't pass.

### Version control built code
If the build is successful and you want to push it to staging, run:

`grunt buildcontrol:develop`

This command takes the built code in dist/, commits it to the local repository in a separate branch, build-develop, and pushes to github.

To build and push the built code for production use, run:

`grunt build:master`

`grunt buildcontrol:master`
