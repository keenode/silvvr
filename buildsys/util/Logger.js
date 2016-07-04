/**
 * buildsys/util/Logger
 * Logger utility for build system.
 * @author Keenan Staffieri
*/

import gutil from 'gulp-util'

class Logger {

  static log (logString) {
    if (config.verbose) {
      gutil.log(logString)
    }
  }

  static task (logString) {
    if (config.verbose) {
      gutil.log(
        gutil.colors.inverse(` --- ${logString} --- `)
      )
    }
  }

  static taskComplete (logString) {
    if (config.verbose) {
      gutil.log(
        gutil.colors.black.bgGreen(` --- ${logString} --- `)
      )
    }
  }

  static banner (logString) {
    gutil.log(
      gutil.colors.green.bgBlack(
        '\n|..............................................|\n|............ ' + logString + ' ............|\n|==============================================|'
      )
    )
  }

  static header (logString) {
    gutil.log(gutil.colors.cyan.bold(logString))
  }

  static notice (logString) {
    if (config.verbose) {
      gutil.log(gutil.colors.yellow.bold(logString))
    }
  }

  static detail (logString) {
    if (config.verbose) {
      gutil.log(gutil.colors.green(logString))
    }
  }

  static info (logString) {
    if (config.verbose) {
      gutil.log(gutil.colors.gray(logString))
    }
  }

  static help (logString) {
    gutil.log(gutil.colors.yellow.italic(logString))
  }

  static warn (logString) {
    if (config.verbose) {
      gutil.log(gutil.colors.yellow(logString))
    }
  }

  static error (logString) {
    gutil.log(gutil.colors.red.bold(logString))
  }
}

export default Logger
