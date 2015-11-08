/**
 * tasks/videos.js
 * ------------------------------------
 * TASK: Videos
 * 'gulp videos'
*/

/* $ gulp videos */

gulp.task('videos', function () {
    // Copy videos to build dir
    logger.log('RUNNING TASK : videos', 'runTask');
    return gulp.src(`${config.appDir.videos}/**/*`)
        .pipe(gulp.dest(config.buildDir.videos));
});
