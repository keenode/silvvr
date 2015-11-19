/**
 * tasks/serve.js
 * ------------------------------------
 * TASK: Serve
 * 'gulp serve'
*/

import browserSync from 'browser-sync';

/* $ gulp serve */

gulp.task('serve', function () {

    // Only serve files if build-only mode is off
    if( ! buildOnlyMode) {

        logger.task('RUNNING TASK : serve');

        return browserSync.init({
            server: {
                baseDir: [config.buildDir.root, './node_modules']
            },
            ui: {
                port: config.browserSync.uiPort
            },
            port: config.browserSync.port,
            open: config.browserSync.openBrowserOnStartup,
            logPrefix: 'Silvvr',
            logFileChanges: config.verbose,
            logConnections: config.verbose,
            injectChanges: true
        });
    }
});
