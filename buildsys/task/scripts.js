/**
 * buildsys/task/scripts
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
*/

const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const stripDebug = require('gulp-strip-debug')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')

/* $ gulp scripts */
gulp.task('scripts', function () {

  Logger.task('RUNNING TASK : scripts')

  // Get build environment settings
  var useES6        = config.useES6;
  var canUglify     = config.env[env].js.uglify;
  var canStripDebug = config.env[env].js.stripDebug;
  var useSourcemaps = config.env[env].js.sourcemaps;

  /**
    Actually perform various transformations on the file(s).
  */
  return gulp.src(`${config.appDir.scripts}/**/*.js`)
    .pipe(plumber({
      errorHandler: function (err) {
        gutil.beep()
        Logger.log(`JavaScript ERROR >> ${err.name} :\n ${err.message}`)
        this.emit('end')
      }
    }))
    .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
    .pipe(useES6 ? babel({ ignore: config.appDir.scripts + '/vendor/*' }) : gutil.noop())
    .pipe(canStripDebug ? stripDebug() : gutil.noop())
    .pipe(canUglify ? uglify() : gutil.noop())
    .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
    .pipe(gulp.dest(config.buildDir.scripts))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : scripts') })
})
