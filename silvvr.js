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

var gulp = require('gulp');

// Import build system ( ./buildsys/index.js ) is automatically loaded first.
require('./buildsys');

gulp.start('default');