/**
 * buildsys/task/build-complete
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Build Complete
 * 'gulp build-complete'
 */

import del from 'del'
import runSequence from 'run-sequence'

/**
  $ gulp build-complete
  > Copies files from '.tmp' into 'public'.
 */
gulp.task('build-complete', (cb) => {
  Logger.task('RUNNING TASK : build-complete')
  runSequence(
    'build-complete:copy-tmp',
    'build-complete:delete-tmp',
  function () {
    Logger.taskComplete('FINISHED TASK : build-complete')
    cb()
  })
})

/* $ gulp build-complete:copy-tmp */
gulp.task('build-complete:copy-tmp', function () {
  // Only copy '.tmp' to './public' if build-only mode is on
  if (buildOnlyMode) {
    return gulp.src('./.tmp/**/*')
      .pipe(gulp.dest(config.oldBuildDir.root))
  }
})


/* $ gulp build-complete:delete-tmp */
gulp.task('build-complete:delete-tmp', function () {
    // Delete '.tmp' folder
    return del('./.tmp')
})
