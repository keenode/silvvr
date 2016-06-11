/**
 * buildsys/classes/ScriptWriter
 * Write scripts and bundles.
 * @author Keenan Staffieri
*/

import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import gutil from 'gulp-util'
import plumber from 'gulp-plumber'

class ScriptWriter {

  static compileScript (bundleScriptName, scriptPaths, destPath) {

    // Get build environment settings
    var canUglify     = config.env[env].js.uglify
    var useSourcemaps = config.env[env].js.sourcemaps

    /**
        Actually perform various transformations on the file(s).
    */
    return gulp.src(scriptPaths)
      .pipe(plumber({
        errorHandler: function (err) {
          gutil.beep()
          Logger.log(`JavaScript ERROR >> ${err.name} :\n ${err.message}`)
          this.emit('end')
        }
      }))
      .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
      // Do not run Babel on bundles
      .pipe( ! bundleScriptName ? babel({ ignore: config.srcDir.app.scripts + '/vendor/*' }) : gutil.noop())
      .pipe(bundleScriptName ? concat(bundleScriptName) : gutil.noop())
      .pipe(canUglify ? uglify({ compress: { drop_console: true } }) : gutil.noop())
      .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
      .pipe(gulp.dest(destPath))
      .on('end', function () {
        return Logger.taskComplete(
          `FINISHED TASK : scripts${bundleScriptName ?  " for bundle '" + bundleScriptName + "'": ''}`
        )
      })
  }
}

module.exports = ScriptWriter
