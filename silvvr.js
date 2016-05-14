#!/usr/bin/env node
/**
    - - - - - -
    S I L V V R
    - - - - - -
    gulpefile.babel
    Front-End Gulp build system and boilerplate.
    @author Keenan Staffieri <http://keenanstaffieri.com>
    Twitter: @keenode
*/

require('babel-core/register')()
require('babel-polyfill')

// Require API server
require('./api/index.js')

// var gulp = require('gulp');

// Import build system ( ./buildsys/index.js ) is automatically loaded first.
// require('./buildsys');

// gulp.start('default');
