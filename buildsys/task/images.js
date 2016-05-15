/**
 * buildsys/task/images
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Images
 * 'gulp images'
*/

/* $ gulp images */
gulp.task('images', function () {
  Logger.task('RUNNING TASK : images')
  // Copy and optimize images to build dir
  return gulp.src(`${config.appDir.images}/**/*.{png,jpg,jpeg,gif,svg}`)
    .pipe(gulp.dest(config.buildDir.images))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : images') })
})
