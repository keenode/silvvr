#!/usr/bin/env node
/**
  - - - - - -
  S I L V V R
  - - - - - -
  Full-stack NodeJS API & frontend Gulp build system.
  @author Keenan Staffieri <http://keenanstaffieri.com>
  Twitter: @keenode
*/

// Require babel for transpiling
require('babel-core/register')()
require('babel-polyfill')

// Application root directory
global.APP_ROOT = __dirname

// Require API server
const api = require('./api')

// Require Gulp
const gulp = require('gulp')

// Require build system
const buildsys = require('./buildsys')

// Start Gulp default task
gulp.start('default')
