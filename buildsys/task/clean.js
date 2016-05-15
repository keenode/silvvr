/**
 * buildsys/task/clean
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Clean
 * 'gulp clean'
*/

const del = require('del')

/**
  $ gulp clean
  > Delete 'public' folder.
*/

gulp.task('clean', function () {
  return del(config.buildDir.root)
})
