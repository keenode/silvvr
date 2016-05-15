/**
 * buildsys/task/page-scripts-bundle
 * ------------------------------------
 * TASK: Page Scripts Bundle
 * 'gulp page-scripts-bundle'
*/

const foreach = require('gulp-foreach')
const PageDependenciesHandler = require('../classes/PageDependenciesHandler')

/**
    $ gulp page-scripts-bundle
    > Only update page script bundles.
*/

gulp.task('page-scripts-bundle', function () {
  Logger.task('RUNNING TASK : page-scripts-bundle')
  return gulp.src(`${config.appDir.pages}/**/*.html`)
    .pipe(foreach(function (stream, file) {
      return PageDependenciesHandler.computeDependencies(stream, file, true, true)
    }))
})
