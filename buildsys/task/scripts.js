/**
 * buildsys/task/scripts
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
*/

const runSequence = require('run-sequence')
const ScriptCompiler = require('../compiler/ScriptCompiler')

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
  return ScriptCompiler.compileGlob(`${config.appDir.scripts}/**/*.js`)
})

/* $ gulp scripts:admin */
gulp.task('scripts:admin', function () {
  return ScriptCompiler.compileGlob(`${config.adminDir.scripts}/**/*.js`)
})
