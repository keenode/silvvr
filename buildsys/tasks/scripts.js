/**
 * tasks/scripts.js
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
*/

import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import stripDebug from 'gulp-strip-debug';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';

/* $ gulp scripts */

gulp.task('scripts', function () {

    Logger.task('RUNNING TASK : scripts');

    // Get build environment settings
    var useES6        = config.useES6,
        canUglify     = config.env[env].js.uglify,
        canStripDebug = config.env[env].js.stripDebug,
        useSourcemaps = config.env[env].js.sourcemaps;

    /**
        Actually perform various transformations on the file(s).
    */
    return gulp.src(`${config.appDir.js}/**/*.js`)
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.beep();
                Logger.log(`JavaScript ERROR >> ${err.name} :\n ${err.message}`);
                this.emit('end');
            }
        }))
        .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
        .pipe(useES6 ? babel({ ignore: config.appDir.js + '/vendor/*' }) : gutil.noop())
        .pipe(canStripDebug ? stripDebug() : gutil.noop())
        .pipe(canUglify ? uglify() : gutil.noop())
        .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
        .pipe(gulp.dest(config.buildDir.js));
});
