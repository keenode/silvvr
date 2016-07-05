/**
 * buildsys/task/svgs
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: SVGs
 * 'gulp svgs'
*/

/* $ gulp svgs */
gulp.task('svgs', function () {
  Logger.task('RUNNING TASK : svgs')
  // Copy and optimize svgs to build dir
  return gulp.src(`${config.srcDir.app.svgs}/**/*.svg`)
    .pipe(gulp.dest(config.buildDir.app.svgs))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : svgs') })
})
