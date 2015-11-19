/**
 * tasks/videos.js
 * ------------------------------------
 * TASK: Videos
 * 'gulp videos'
*/

/* $ gulp videos */

gulp.task('videos', function () {
    // Copy videos to build dir
    logger.task('RUNNING TASK : videos');
    return gulp.src(`${config.appDir.videos}/**/*`)
        .pipe(gulp.dest(config.buildDir.videos));
});
