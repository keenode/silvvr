/**
 * utils/Logger.js
 * Logger utility for build system.
*/

import gutil from 'gulp-util';

class Logger {

    static log(logString) {
        if(config.verbose) {
            gutil.log(logString);
        }
    }

    static task(logString) {
        if(config.verbose) {
            gutil.log(
                gutil.colors.inverse(
                    ' --- ' + logString + ' --- '
                )
            );
        }
    }

    static banner(logString) {
        gutil.log(
            gutil.colors.green.bgBlack(
                '\n|..............................................|\n|............ ' + logString + ' ............|\n|==============================================|'
            )
        );
    }

    static header(logString) {
        gutil.log(gutil.colors.cyan.bold(logString));
    }

    static notice(logString) {
        if(config.verbose) {
            gutil.log(gutil.colors.yellow.bold(logString));
        }
    }

    static info(logString) {
        if(config.verbose) {
            gutil.log(gutil.colors.gray(logString));
        }
    }

    static warn(logString) {
        gutil.log(gutil.colors.yellow(logString));
    }

    static error(logString) {
        gutil.log(gutil.colors.red.bold(logString));
    }
}

export default Logger;