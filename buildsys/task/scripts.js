/**
 * buildsys/task/scripts
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
*/

import runSequence from 'run-sequence'
import ScriptCompiler from '../compiler/ScriptCompiler'

/**
  $ gulp scripts
  > Compile scripts for application and admin.
*/
gulp.task('scripts', (cb) => {
  Logger.task('RUNNING TASK : scripts')
  runSequence(
    [
      'scripts:app',
      'scripts:admin',
    ],
  function () {
    Logger.taskComplete('FINISHED TASK : scripts')
    cb()
  })
})

/* $ gulp scripts:app */
gulp.task('scripts:app', function () {
  return ScriptCompiler.compileGlob(
    `${config.srcDir.app.scripts}/**/*.js`,
    config.buildDir.app.scripts,
    'app'
  )
})

/* $ gulp scripts:admin */
gulp.task('scripts:admin', function () {
  return ScriptCompiler.compileGlob(
    `${config.srcDir.admin.scripts}/**/*.js`,
    config.buildDir.admin.scripts,
    'admin'
  )
})
