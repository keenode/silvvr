/**
 * buildsys/task/rootfiles
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Rootfiles
 * 'gulp rootfiles'
*/

/* $ gulp rootfiles */
gulp.task('rootfiles', function () {
  // Copy rootfiles to build dir
  Logger.task('RUNNING TASK : rootfiles')
  return gulp.src([`${config.appDir.root}/*.*`, `!${config.appDir.root}/*.html`])
    .pipe(gulp.dest(config.buildDir.root))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : rootfiles') })
})
