Angular Single Page Application Seed
====================================

History
-------

Every time you start a new project the most boring and time consuming task is the set up. Define folder
structure, libraries to use, build tool, test suit, version control, etc.

This seed project contains the essential set up for an angular project, and works on top of NodeJS based tools.

Tools Used
----------

*[Gulp](http://gulpjs.com/) : Main automation and local build tool. Compiles templates, runs units test, concatenate javascript and css files, among other things.
*[Mocha](http://mochajs.org/) : Unit testing framework. It has great flexibility, is compatible between browser and server and has a good set of assertion and mock libraries [Chai](http://chaijs.com/) & [Sinon](http://sinonjs.org/).
*[Browserify](http://browserify.org/) : Node module that allows the usage of CommonJS modules in the browser.
*[Plato](https://github.com/es-analysis/plato) : JavaScript source code complexity analyzer.
*[Istanbul](http://gotwarlost.github.io/istanbul/) : JavaScript code coverage tool and reporter.
*[JSHint](http://jshint.com/) : Code quality analyzer. Detects code smells and bad practices.
*[Jade](http://jade-lang.com/) : Templating language to create re-usable HTML components.
*[Sass](http://sass-lang.com/) : CSS preprocessor that helps us maintain our css assets.
*[AngularJS](https://angularjs.org/) : JavaScript Front-End framework to structure and fast develop web applications.


Pre-requisites
--------------
+[NodeJS](http://nodejs.org/)installed in your development machine.
+Gulp and Bower installed. Install by running `npm install -g gulp bower`

How to Roll
-----------
Run `gulp <taskname>` in your command line.

Available Tasks:
    *Default : Compiles SCSS and Jade files, bundles JS code, runs unit tests and starts a web server on http://localhost:3000.
               Just run `gulp`
    *CSS : `gulp css`. Compiles SCSS files to CSS.
    *JS : `gulp js`. Bundles JavaScript code using Browserify.
    *HTML: `gulp html`. Compiles jade templates to html files.
    *Unit Test: `gulp unit-test`. Runs unit test suits using Mocha and Istanbul.
    *Lint JS : `gulp lint-js`. Runs JSHin to detect code smells in your source files.
    *Anayze: `gulp analyze`. Lints, unit test and checks complexity of source code.
    *Serve: `gulp serve`. Starts HTTP server on http://localhost:3000.
