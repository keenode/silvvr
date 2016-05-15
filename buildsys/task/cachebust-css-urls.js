/**
 * buildsys/task/cachebust-css-urls
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Cachebust CSS URLs
 * 'gulp cachebust-css-urls'
*/

const gutil = require('gulp-util')
const cssnano = require('gulp-cssnano')
const modifyCssUrls = require('gulp-modify-css-urls')

/* $ gulp cachebust-css-urls */
gulp.task('cachebust-css-urls', (cb) => {

  Logger.task('RUNNING TASK : cachebust-css-urls')
  var optimizeCSS = config.env[env].styles.optimize

  return gulp.src(`${config.buildDir.styles}/**/*.css`)
    .pipe(CACHEBUST_HASH ? modifyCssUrls({
      append: '?v=' + CACHEBUST_HASH
    }) : gutil.noop())
    .pipe(optimizeCSS ? cssnano() : gutil.noop())
    .pipe(gulp.dest(config.buildDir.styles))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : cachebust-css-urls') })
})
