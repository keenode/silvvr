/**
 * buildsys/task/svgs
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: SVGs
 * 'gulp svgs'
 */

/* $ gulp svgs:app */
gulp.task('svgs:app', function () {
  Logger.task('RUNNING TASK : svgs:app')
  // Copy and optimize svgs to build dir
  return gulp.src(`${config.srcDir.app.svgs}/**/*.svg`)
    .pipe(gulp.dest(config.buildDir.app.svgs))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : svgs:app') })
})

/* $ gulp svgs:admin */
gulp.task('svgs:admin', function () {
  Logger.task('RUNNING TASK : svgs:admin')
  // Copy and optimize svgs to build dir
  return gulp.src(`${config.srcDir.admin.svgs}/**/*.svg`)
    .pipe(gulp.dest(config.buildDir.admin.svgs))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : svgs:admin') })
})
