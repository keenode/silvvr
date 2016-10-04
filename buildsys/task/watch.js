/**
 * buildsys/task/watch
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch
 * 'gulp watch'
 */

import runSequence from 'run-sequence'
import watch from 'gulp-watch'

/**
  $ gulp watch
  > Watch files for changes and run associated build tasks.
 */
gulp.task('watch', function () {

  // Only watch files if build-only mode is off
  if (buildOnlyMode) return false

  Logger.task('RUNNING TASK : watch')

  watch([
      `${config.srcDir.app.root}/*`,
      `!${config.srcDir.admin.root}/*`
  ], {
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

  watch(`${config.srcDir.app.root}/**/*.njk`, {
    name: 'App Nunjucks Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('template-change')
  })

  watch(`${config.srcDir.admin.root}/**/*.njk`, {
    name: 'Admin Nunjucks Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('templating:admin')
  })

  watch(`${config.srcDir.app.images}/**/*.{png,jpg,jpeg,gif}`, {
    name: 'App Images Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('images:app')
  })

  watch(`${config.srcDir.admin.images}/**/*.{png,jpg,jpeg,gif}`, {
    name: 'Admin Images Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('images:admin')
  })

  watch(`${config.srcDir.app.images}/**/*.svg`, {
    name: 'App SVGs Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('svgs:app')
  })

  watch(`${config.srcDir.admin.images}/**/*.svg`, {
    name: 'Admin SVGs Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('svgs:admin')
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

  watch(`${config.srcDir.app.patternLibrary}/*`, {
    name: 'Pattern Library Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('pattern-library')
  })

})

/**
  Bundled Watcher Tasks...
 */

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
