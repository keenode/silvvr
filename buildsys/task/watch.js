/**
 * buildsys/task/watch
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch
 * 'gulp watch'
*/

const runSequence = require('run-sequence')
const watch = require('gulp-watch')
const browserSync = require('browser-sync')

/**
  $ gulp watch
  > Watch files for changes and run associated build tasks.
*/
gulp.task('watch', function () {

  // Only watch files if build-only mode is off
  if (buildOnlyMode) return false

  Logger.task('RUNNING TASK : watch')

  watch(`${config.srcDir.app.root}/*`, {
    name: 'Rootfiles Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('rootfiles')
  })

  watch(`${config.srcDir.app.styles}/**/*.{scss,sass}`, {
    name: 'App Styles Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('styles:app')
  })

  watch(`${config.srcDir.admin.styles}/**/*.{scss,sass}`, {
    name: 'Admin Styles Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('styles:admin')
  })

  watch(`${config.srcDir.app.scripts}/**/*.js`, {
    name: 'App Scripts Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('page-scripts-changed')
  })

  watch(`${config.srcDir.admin.scripts}/**/*.js`, {
    name: 'Admin Scripts Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('scripts:admin')
  })

  watch(`${config.srcDir.app.root}/**/*.html`, {
    name: 'HTML Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('template-change')
  })

  watch(`${config.srcDir.app.images}/**/*.{png,jpg,jpeg,gif,svg}`, {
    name: 'Images Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('images')
  })

  watch(`${config.srcDir.app.fonts}/**/*`, {
    name: 'Fonts Watcher',
    verbose: config.verbose
  }, function (vinyl) {
    gulp.start('fonts')
  })

  watch(`${config.srcDir.app.videos}/**/*`, {
    name: 'Videos Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('videos')
  })

  watch([
    `${config.buildDir.app.root}/**/*`,
    `${config.buildDir.admin.root}/**/*`,
  ], {
    name: 'Post-Build Watcher',
    verbose: config.verbose
  }).on('change', function () {
    if (config.browserSync.allowReload) {
      browserSync.reload()
    }
  })
})

gulp.task('page-scripts-changed', (cb) => {
  return runSequence(
    'scripts:app',
    'page-scripts-bundle'
  , cb)
})

gulp.task('template-change', (cb) => {
  return runSequence(
    'scripts:app',
    'templating'
  , cb)
})
