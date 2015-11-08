/**
 * tasks/fonts.js
 * ------------------------------------
 * TASK: Fonts
 * 'gulp fonts'
*/

/* $ gulp fonts */

gulp.task('fonts', function () {
    // Copy fonts to build dir
    logger.log('RUNNING TASK : fonts', 'runTask');
    return gulp.src(`${config.appDir.fonts}/**/*`)
        .pipe(gulp.dest(config.buildDir.fonts));
});
