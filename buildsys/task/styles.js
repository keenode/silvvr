/**
 * buildsys/task/styles
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 * 'gulp styles'
*/

import runSequence from 'run-sequence'
import StyleCompiler from '../compiler/StyleCompiler'

/**
  $ gulp styles
  > Preprocess styles for application and admin.
*/
gulp.task('styles', (cb) => {
  Logger.task('RUNNING TASK : styles')
  runSequence(
    [
      'styles:app',
      'styles:admin',
    ],
  function () {
    Logger.taskComplete('FINISHED TASK : styles')
    cb()
  })
})

/* $ gulp styles:app */
gulp.task('styles:app', function () {
  return StyleCompiler.compileGlob(
    `${config.srcDir.app.styles}/**/*.{scss,sass}`,
    config.buildDir.app.styles,
    'app'
  )
})

/* $ gulp styles:admin */
gulp.task('styles:admin', function () {
  return StyleCompiler.compileGlob(
    `${config.srcDir.admin.styles}/**/*.{scss,sass}`,
    config.buildDir.admin.styles,
    'admin'
  )
})
