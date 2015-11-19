/**
 * utils/logger.js
 * Logger utility for build system.
*/

import gutil from 'gulp-util';

export default {

    log: function (logString) {
        if (config.verbose) {
            gutil.log(logString);
        }
    },

    task: function (logString) {
        if (config.verbose) {
            gutil.log(
                gutil.colors.inverse(
                    ' --- ' + logString + ' --- '
                )
            );
        }
    },

    command: function (logString) {
        if (config.verbose) {
            gutil.log(gutil.colors.yellow.bold(logString));
        }
    },

    info: function (logString) {
        if (config.verbose) {
            gutil.log(gutil.colors.gray(logString));
        }
    },

    banner: function (logString) {
        gutil.log(
            gutil.colors.green.bgBlack(
                '\n|..............................................|\n|............ ' + logString + ' ............|\n|==============================================|'
            )
        );
    },

    header: function (logString) {
        gutil.log(gutil.colors.cyan.bold(logString));
    },

    error: function (logString) {
        gutil.log(gutil.colors.red.bold(logString));
    },
};
