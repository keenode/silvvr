/**
 * tasks/favicons.js
 * ------------------------------------
 * TASK: Favicons
 * 'gulp favicons'
*/

import fs from 'fs';
import runSequence from 'run-sequence';

/**
    $ gulp favicons
*/

gulp.task('favicons', function () {
    // Copy favicon images to favicons build dir
    Logger.task('RUNNING TASK : favicons');
    return gulp.src(`${config.appDir.favicons}/**/*.*`)
        .pipe(gulp.dest(config.buildDir.favicons))
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : favicons'); });
});
