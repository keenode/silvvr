/**
 * buildsys/task/videos
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Videos
 * 'gulp videos'
*/

/* $ gulp videos */
gulp.task('videos', function () {
  // Copy videos to build dir
  Logger.task('RUNNING TASK : videos')
  return gulp.src(`${config.srcDir.app.videos}/**/*`)
    .pipe(gulp.dest(config.buildDir.app.videos))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : videos') })
})
