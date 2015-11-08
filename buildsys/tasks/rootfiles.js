/**
 * tasks/rootfiles.js
 * ------------------------------------
 * TASK: Rootfiles
 * 'gulp rootfiles'
*/

/* $ gulp rootfiles */

gulp.task('rootfiles', function () {
    // Copy rootfiles to build dir
    logger.log('RUNNING TASK : rootfiles', 'runTask');
    return gulp.src([`${config.appDir.root}/*.*`, `!${config.appDir.root}/*.html`])
        .pipe(gulp.dest(config.buildDir.root));
});
