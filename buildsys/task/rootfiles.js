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
  return gulp.src([`${config.srcDir.app.root}/*.*`, `!${config.srcDir.app.root}/*.njk`])
    .pipe(gulp.dest(config.buildDir.app.root))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : rootfiles') })
})
