/**
 * buildsys/task/serve
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Serve
 * 'gulp serve'
 */

import browserSync from 'browser-sync'

/* $ gulp serve */
gulp.task('serve', function () {

  // Only serve files if build-only mode is off
  if ( ! buildOnlyMode) {

    Logger.task('RUNNING TASK : serve')

    return browserSync.init({
      server: {
        baseDir: [config.buildDir.app.root, './node_modules']
      },
      ui: {
        port: config.browserSync.uiPort
      },
      port: config.browserSync.port,
      open: config.browserSync.openBrowserOnStartup,
      logPrefix: 'Silvvr',
      logFileChanges: config.verbose,
      logConnections: config.verbose,
      notify: false,
      injectChanges: true,
    })
  }
})
