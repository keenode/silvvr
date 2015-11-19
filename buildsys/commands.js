/**
 * commands.js
 * Silvvr gulp task series commands are defined here.
 * ------------------------------------------------------------------------------------------------
 * 'gulp init'    - Runs a series of tasks for app initialization.
 * 'gulp'         - Runs a series of tasks for building the app. The following flags can be passed:
 * 'gulp --stage' - Builds the app with 'staging' settings.
 * 'gulp --prod'  - Builds the app with 'production' settings.
 * 'gulp --build' - Only build the app, do not watch files or serve.
 * ------------------------------------------------------------------------------------------------
 * Note: You can combine flags i.e. 'gulp --prod --build'
*/

import runSequence from 'run-sequence';

/* --- $ gulp favicons --- */

gulp.task(
    'favicons',
    function (cb) {
        logger.log('Running FAVICONS tasks...', 'command');
        runSequence(
            'generate-favicons',
        cb);
    }
);


/* --- $ gulp --- */

gulp.task(
    'default',
    function (cb) {

        // Log build mode setting
        var buildModeText = 'DEVELOPMENT';
        if      (env === 'stage') { buildModeText = 'STAGING';    }
        else if (env === 'prod')  { buildModeText = 'PRODUCTION'; }

        logger.log(`Running tasks in ${buildModeText} mode...`, 'command');

        /**
            > If the '--build' flag is passed, all files will output to a '.tmp' dir.
            > The original 'dist' dir will not be deleted until all files are processed.
            > After all tasks finish, contents of the '.tmp' dir will be copied over to the 'dist' dir.
        */
        if(buildOnlyMode) {
            logger.log('Build-only mode. File watching is disabled.', 'command');

            /**
                Override 'dist' dir build folder to '.tmp' for build process compilation.
            */
            var rootReplace = config.buildDir.root;
            for(let folder in config.buildDir) {
                config.buildDir[folder] = config.buildDir[folder].replace(rootReplace, './.tmp');
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
            'templating',
            'serve',
            'watch',
            'build-complete',
        cb);
    }
);
