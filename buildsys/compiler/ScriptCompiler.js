/**
 * buildsys/compiler/ScriptCompiler
 * Transpiling scripts with Babel and distribute.
 * @author Keenan Staffieri
*/

import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import stripDebug from 'gulp-strip-debug'
import sourcemaps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'
import gutil from 'gulp-util'
import plumber from 'gulp-plumber'

class ScriptCompiler {

  static compileGlob (globList, destPath, taskName='') {

    if (taskName !== '') taskName = ':' + taskName

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
      .pipe(babel({ ignore: config.srcDir.app.scripts + '/vendor/*' }))
      .pipe(canStripDebug ? stripDebug() : gutil.noop())
      .pipe(canUglify ? uglify() : gutil.noop())
      .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
      .pipe(gulp.dest(destPath))
      .on('end', function () { return Logger.taskComplete('FINISHED TASK : scripts' + taskName) })
  }
}

export default ScriptCompiler
