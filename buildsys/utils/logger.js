/**
 * utils/logger.js
 * Logger utility for build system.
*/

import gutil from 'gulp-util';

export default {
    log: function (logString, logType='default') {

        // Only output logs if verbose mode is enabled
        // OR the log type is an 'error' message >;0
        // OR we got a 'banner', 'header'
        if(config.verbose || logType === 'error' || logType === 'banner' || logType === 'header') {

            // Apply specific styling for the log type
            switch(logType) {

                case 'runTask':
                    gutil.log(
                        gutil.colors.inverse(
                            ' --- ' + logString + ' --- '
                        )
                    );
                    break;

                case 'command':
                    gutil.log(gutil.colors.yellow.bold(logString));
                    break;

                case 'info':
                    gutil.log(gutil.colors.gray(logString));
                    break;

                case 'banner':
                    gutil.log(
                        gutil.colors.green.bgBlack(
                            '\n|..............................................|\n|............ ' + logString + ' ............|\n|==============================================|'
                        )
                    );
                    break;

                case 'header':
                    gutil.log(gutil.colors.cyan.bold(logString));
                    break;

                case 'error':
                    gutil.log(gutil.colors.red.bold(logString));
                    break;

                default:
                    gutil.log(logString);
            }
        }
    }
};
