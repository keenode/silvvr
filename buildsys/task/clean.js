/**
 * buildsys/task/clean
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Clean
 * 'gulp clean'
 */

import del from 'del'

/**
  $ gulp clean
  > Delete 'public' folder.
 */

gulp.task('clean', function () {
  return del(config.buildDir.app.root)
})
