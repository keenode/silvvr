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
  > Preprocess styles for application and styleguide.
*/
gulp.task('styles', (cb) => {
  Logger.task('RUNNING TASK : styles')
  runSequence(
    [
      'styles:app',
      'styles:styleguide',
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

/* $ gulp styles:styleguide */
gulp.task('styles:styleguide', function () {
  return StyleCompiler.compileGlob(
    `${config.srcDir.styleguide.styles}/**/*.{scss,sass}`,
    config.buildDir.styleguide.styles,
    'styleguide'
  )
})
