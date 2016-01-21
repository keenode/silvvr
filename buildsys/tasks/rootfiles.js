/**
 * tasks/rootfiles.js
 * ------------------------------------
 * TASK: Rootfiles
 * 'gulp rootfiles'
*/

/* $ gulp rootfiles */

gulp.task('rootfiles', function () {
    // Copy rootfiles to build dir
    Logger.task('RUNNING TASK : rootfiles');
    return gulp.src([`${config.appDir.root}/*.*`, `!${config.appDir.root}/*.html`])
        .pipe(gulp.dest(config.buildDir.root));
});
