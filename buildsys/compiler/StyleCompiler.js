/**
 * buildsys/compiler/StyleCompiler
 * Run SASS preprocessing and distribute.
 * @author Keenan Staffieri
*/

import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'
import gutil from 'gulp-util'
import plumber from 'gulp-plumber'

class StyleCompiler {

  static compileGlob (globList, destPath, taskName='') {

  if (taskName !== '') taskName = ':' + taskName

  // Get build environment settings
  var optimizeCSS   = config.env[env].styles.optimize
  var useSourcemaps = config.env[env].styles.sourcemaps

  var sassOutputStyle = 'expanded'
  if (optimizeCSS) sassOutputStyle = 'compressed'

  // Copy and process css files to build dir
  return gulp.src(globList)
    .pipe(plumber({
      errorHandler: function (err) {
        gutil.beep()
        Logger.error(`CSS ERROR >> ${err.name} :\n ${err.message}`)
        this.emit('end')
      }
    }))
    .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
    .pipe(sass({ outputStyle: sassOutputStyle }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [ 'last 2 versions' ],
      cascade: false,
    }))
    .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
    .pipe(gulp.dest(destPath))
    .pipe(config.browserSync.injectCSS ? browserSync.stream() : gutil.noop())
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : styles' + taskName) })
  }
}

export default StyleCompiler
