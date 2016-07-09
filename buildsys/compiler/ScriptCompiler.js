/**
 * buildsys/compiler/ScriptCompiler
 * Transpiling scripts with Babel and distribute.
 * @author Keenan Staffieri
*/

import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import stripDebug from 'gulp-strip-debug'
import sourcemaps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'
import gutil from 'gulp-util'
import plumber from 'gulp-plumber'

class ScriptCompiler {

  static compileGlob (globList, destPath, taskName='', bundleScriptName=null) {

    if (taskName !== '') taskName = ':' + taskName

    // Get build environment settings
    const canUglify     = config.env[env].scripts.uglify
    const canStripDebug = config.env[env].scripts.stripDebug
    const useSourcemaps = config.env[env].scripts.sourcemaps

    /**
      Actually perform various transformations on the file(s).
    */
    return gulp.src(globList)
      .pipe(plumber({
        errorHandler: function (err) {
          gutil.beep()
          Logger.error(`JavaScript ERROR >>\n${err.name} :\n ${err.message}`)
          this.emit('end')
        }
      }))
      .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
      .pipe( ! bundleScriptName ? babel({ ignore: config.srcDir.app.scripts + '/vendor/*' }) : gutil.noop())
      .pipe(bundleScriptName ? concat(bundleScriptName + '.js') : gutil.noop())
      .pipe(canStripDebug ? stripDebug() : gutil.noop())
      .pipe(canUglify ? uglify({ compress: { drop_console: true } }) : gutil.noop())
      .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
      .pipe(gulp.dest(destPath))
      .on('end', function () { return Logger.taskComplete('FINISHED TASK : scripts' + taskName) })
  }
}

export default ScriptCompiler
