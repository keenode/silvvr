/**
 * buildsys/task/pattern-library
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Pattern Library
 * 'gulp pattern-library'
*/

/* $ gulp pattern-library */
gulp.task('pattern-library', function () {
  // Copy pattern-library files to build dir
  Logger.task('RUNNING TASK : pattern-library')
  return gulp.src([`${config.srcDir.app.patternLibrary}/**/*`])
    .pipe(gulp.dest(config.buildDir.app.patternLibrary))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : pattern-library') })
})
