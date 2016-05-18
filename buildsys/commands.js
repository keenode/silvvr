/**
 * commands.js
 * Silvvr gulp task series commands are defined here.
 * ------------------------------------------------------------------------------------------------
 * 'gulp'         - Runs a series of tasks for building the app. The following flags can be passed:
 * 'gulp --stage' - Builds the app with 'staging' settings.
 * 'gulp --prod'  - Builds the app with 'production' settings.
 * 'gulp --build' - Only build the app, do not watch files or serve.
 * Scaffolding / Generation tasks:
 * 'gulp generate-favicons' - Generate a series of favicon images and write to a template.
 * ------------------------------------------------------------------------------------------------
 * Note: You can combine flags i.e. 'gulp --prod --build'
*/

var runSequence = require('run-sequence')

/* --- $ gulp --- */

/**
 * Default task
*/
gulp.task('default', (cb) => {

  // Log build mode setting
  var buildModeText = 'DEVELOPMENT'
  if      (env === 'stage') { buildModeText = 'STAGING'    }
  else if (env === 'prod')  { buildModeText = 'PRODUCTION' }

  Logger.notice(`Running tasks in ${buildModeText} mode...`)

  /**
    > If the '--build' flag is passed, all files will output to a '.tmp' dir.
    > The original 'public' dir will not be deleted until all files are processed.
    > After all tasks finish, contents of the '.tmp' dir will be copied over to the 'public' dir.
  */
  if (buildOnlyMode) {
    Logger.notice('Build-only mode. File watching is disabled.')

    /**
        Override 'public' dir build folder to '.tmp' for build process compilation.
    */
    var rootReplace = config.buildDir.app.root
    config.oldBuildDir = {}
    for (var folder in config.buildDir) {
      // Copy over original build dir properties
      config.oldBuildDir[folder] = config.buildDir[folder]
      // Assign new build dir properties with tmp folder replacing original properties
      config.buildDir[folder] = config.buildDir[folder].replace(rootReplace, './.tmp')
    }
  }

  runSequence(
    'clean',
    [ // Run these tasks in parallel...
      'styles',
      'scripts',
      'images',
      'favicons',
      'fonts',
      'videos',
      'rootfiles'
    ],
    'cachebust-css-urls',
    'templating',
    // 'webpack',
    // 'serve',
    'watch',
    'webpack',
    'webpack-dev-server',
    'build-complete',
  function () {
    if( ! buildOnlyMode) {
      Logger.notice('Watching files for changes...')
    }
    cb()
  })
})
