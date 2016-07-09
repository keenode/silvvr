/**
 * buildsys/task/watch
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch
 * 'gulp watch'
*/

import runSequence from 'run-sequence'
import watch from 'gulp-watch'
import browserSync from 'browser-sync';

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

  // watch(`${config.srcDir.styleguide.styles}/**/*.{scss,sass}`, {
  //   name: 'Styleguide Styles Watcher',
  //   verbose: config.verbose
  // }, function () {
  //   gulp.start('styles:styleguide')
  // })

  watch(`${config.srcDir.app.scripts}/**/*.js`, {
    name: 'App Scripts Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('page-scripts-changed')
  }).on('change', function () {
    if (config.browserSync.allowReload) {
      browserSync.reload()
    }
  })

  // watch(`${config.srcDir.styleguide.scripts}/**/*.js`, {
  //   name: 'Styleguide Scripts Watcher',
  //   verbose: config.verbose
  // }, function () {
  //   gulp.start('scripts:styleguide')
  // })

  watch(`${config.srcDir.app.root}/**/*.njk`, {
    name: 'Nunjucks Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('template-change')
  })

  watch(`${config.srcDir.app.images}/**/*.{png,jpg,jpeg,gif}`, {
    name: 'Images Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('images')
  })

  watch(`${config.srcDir.app.images}/**/*.svg`, {
    name: 'SVGs Watcher',
    verbose: config.verbose
  }, function () {
    gulp.start('svgs')
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
