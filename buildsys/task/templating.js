/**
 * buildsys/task/templating
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Templating
 * 'gulp templating'
 */

import runSequence from 'run-sequence'
import foreach from 'gulp-foreach'
import uglify from 'gulp-uglify'
import gutil from 'gulp-util'
import PageDependenciesHandler from '../class/PageDependenciesHandler'
import TemplateCompiler from '../compiler/TemplateCompiler'

/**
  $ gulp templating
  > Process .njk files with Nunjucks templating system.
  > Set up JavaScript bundles and minify .html files.
 */
gulp.task('templating', (cb) => {
  Logger.task('RUNNING TASK : templating')
  runSequence(
    'templating:app',
    'templating:vendor-scripts',
    'templating:admin',
  function () {
    Logger.taskComplete('FINISHED TASK : templating')
    cb()
  })
})

/* $ gulp templating:app */
gulp.task('templating:app', function () {
  return compileTemplateSet('app')
})

/* $ gulp templating:admin */
gulp.task('templating:admin', function () {
  return compileTemplateSet('admin')
})

function compileTemplateSet (name) {
  return gulp.src([
      `${config.srcDir[name].root}/index.njk`,
      `${config.srcDir[name].views}/page/**/*.njk`
    ])
    .pipe(foreach(function (stream, file) {

      // Compile dependencies for the template IF app set
      if (name === 'app') {
        PageDependenciesHandler.computeDependencies(stream, file)
      }

      // Compile the Nunjucks template into HTML
      return TemplateCompiler.compileTemplate(
        file.path,
        config.buildDir[name].root,
        name,
        function () {
          return stream
        }
      )
    }))
}

/* $ gulp templating:vendor-scripts */
gulp.task('templating:vendor-scripts', function () {
  const canUglify = config.env[env].scripts.uglify
  return gulp.src(`${config.buildDir.app.scripts}/vendor.js`)
    .pipe(canUglify ? uglify() : gutil.noop())
    .pipe(gulp.dest(config.buildDir.app.scripts))
})
