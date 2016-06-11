/**
 * buildsys/task/page-scripts-bundle
 * ------------------------------------
 * TASK: Page Scripts Bundle
 * 'gulp page-scripts-bundle'
*/

import foreach from 'gulp-foreach'
import PageDependenciesHandler from '../class/PageDependenciesHandler'

/**
    $ gulp page-scripts-bundle
    > Only update page script bundles.
*/
gulp.task('page-scripts-bundle', function () {
  Logger.task('RUNNING TASK : page-scripts-bundle')
  return gulp.src(`${config.srcDir.app.pages}/**/*.html`)
    .pipe(foreach(function (stream, file) {
      return PageDependenciesHandler.computeDependencies(stream, file, true, true)
    }))
})
