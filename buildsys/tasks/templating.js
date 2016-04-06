/**
 * tasks/templating.js
 * ------------------------------------
 * TASK: Templating
 * 'gulp templating'
*/

import swig from 'gulp-swig';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import replace from 'gulp-replace';
import gutil from 'gulp-util';
import useref from 'gulp-useref';
import uglify from 'gulp-uglify';
import runSequence from 'run-sequence';
import html from 'html';
import apiUrls from '../config/api-urls';
import foreach from 'gulp-foreach';
import PageDependenciesHandler from '../classes/PageDependenciesHandler';


/**
    $ gulp templating
    > Process .html files with Swig templating system.
    > Set up JavaScript bundles and minify .html files.
*/
gulp.task('templating', function (cb) {
    Logger.task('RUNNING TASK : templating');
    runSequence(
        'templating:process',
        [
            'templating:vendor-scripts',
            'templating:minify-html'
        ],
    function () {
        Logger.taskComplete('FINISHED TASK : templating');
        cb();
    });
});


/* $ gulp templating:process */

gulp.task('templating:process', function () {

    // Get build environment settings
    var canMinifyHTML = config.env[env].html.minify,
        canBundle     = config.env[env].js.bundle;

    return gulp.src(`${config.appDir.root}/**/*.html`)
        .pipe(foreach(function (stream, file) {
            return PageDependenciesHandler.computeDependencies(stream, file);
        }))
        .pipe(swig({
            setup: function (swig) {
                swig.setDefaults({
                    autoescape: false,
                    cache: false,
                    loader: swig.loaders.fs(`${config.appDir.views}/`)
                });
                swig.setFilter('cachebust', function (input) {
                    return CACHEBUST_HASH ? input + '?v=' + CACHEBUST_HASH : input;
                });
                swig.setFilter('makeTextReadable', function (input) {
                    var rgb = parseInt(input, 16);   // convert rrggbb to decimal
                    var r = (rgb >> 16) & 0xff;  // extract red
                    var g = (rgb >>  8) & 0xff;  // extract green
                    var b = (rgb >>  0) & 0xff;  // extract blue

                    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

                    if (luma > 240)      { return '#888'; }
                    else if (luma > 230) { return '#777'; }
                    else if (luma > 220) { return '#666'; }
                    else if (luma > 210) { return '#555'; }
                    else if (luma > 200) { return '#444'; }

                    return '#fff';
                });
                swig.setFilter('respectNewlines', function (input) {
                    return html.prettyPrint(input);
                });
            },
        }))
        .pipe(replace('<%= API_URL =%>', apiUrls[env]))
        .pipe(canBundle ? useref({ searchPath: buildOnlyMode ? './.tmp' : './dist' }) : gutil.noop())
        .pipe(gulp.dest(config.buildDir.root));
});


/* $ gulp templating:vendor-scripts */

gulp.task('templating:vendor-scripts', function () {

    var canUglify = config.env[env].js.uglify;

    return gulp.src(`${config.buildDir.js}/vendor.js`)
        .pipe(canUglify ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.buildDir.js));
});


/* $ gulp templating:minify-html */

gulp.task('templating:minify-html', function () {

    var canMinifyHTML = config.env[env].html.minify;

    return gulp.src(`${config.buildDir.root}/index.html`)
        .pipe(canMinifyHTML ? htmlmin({ collapseWhitespace: true }) : gutil.noop())
        .pipe(gulp.dest(config.buildDir.root));
});
