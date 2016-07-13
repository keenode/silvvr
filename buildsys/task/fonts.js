/**
 * buildsys/task/fonts
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Fonts
 * 'gulp fonts'
*/

/* $ gulp fonts */
gulp.task('fonts', function () {
  // Copy fonts to build dir
  Logger.task('RUNNING TASK : fonts')
  return gulp.src(`${config.srcDir.app.fonts}/**/*`)
    .pipe(gulp.dest(config.buildDir.app.fonts))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : fonts') })
})
