/**
 * buildsys/compiler/Logger
 * Transpiling scripts with Babel.
 * @author Keenan Staffieri
*/

const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const stripDebug = require('gulp-strip-debug')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')

class ScriptCompiler {

  static compileGlob (globList) {

    // Get build environment settings
    var canUglify     = config.env[env].scripts.uglify
    var canStripDebug = config.env[env].scripts.stripDebug
    var useSourcemaps = config.env[env].scripts.sourcemaps

    /**
      Actually perform various transformations on the file(s).
    */
    return gulp.src(globList)
      .pipe(plumber({
        errorHandler: function (err) {
          gutil.beep()
          Logger.error(`JavaScript ERROR >> ${err.name} :\n ${err.message}`)
          this.emit('end')
        }
      }))
      .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
      .pipe(babel({ ignore: config.appDir.scripts + '/vendor/*' }))
      .pipe(canStripDebug ? stripDebug() : gutil.noop())
      .pipe(canUglify ? uglify() : gutil.noop())
      .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
      .pipe(gulp.dest(config.buildDir.scripts))
      .on('end', function () { return Logger.taskComplete('FINISHED TASK : scripts') })
  }
}

module.exports = ScriptCompiler
