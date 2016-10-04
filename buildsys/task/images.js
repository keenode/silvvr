/**
 * buildsys/task/images
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Images
 * 'gulp images'
 */

/* $ gulp images:app */
gulp.task('images:app', function () {
  Logger.task('RUNNING TASK : images:app')
  // Copy and optimize images to build dir
  return gulp.src(`${config.srcDir.app.images}/**/*.{png,jpg,jpeg,gif}`)
    .pipe(gulp.dest(config.buildDir.app.images))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : images:app') })
})

/* $ gulp images:admin */
gulp.task('images:admin', function () {
  Logger.task('RUNNING TASK : images:admin')
  // Copy and optimize images to build dir
  return gulp.src(`${config.srcDir.admin.images}/**/*.{png,jpg,jpeg,gif}`)
    .pipe(gulp.dest(config.buildDir.admin.images))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : images:admin') })
})
