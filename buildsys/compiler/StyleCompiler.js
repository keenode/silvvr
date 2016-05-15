/**
 * buildsys/compiler/StyleCompiler
 * Run SASS preprocessing and distribute.
 * @author Keenan Staffieri
*/

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')

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

module.exports = StyleCompiler
