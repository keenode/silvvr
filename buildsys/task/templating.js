/**
 * buildsys/task/templating
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Templating
 * 'gulp templating'
*/

import runSequence from 'run-sequence'
import TemplateCompiler from '../compiler/TemplateCompiler'

/**
  $ gulp templating
  > Process .html files with Swig templating system.
  > Set up JavaScript bundles and minify .html files.
*/
gulp.task('templating', (cb) => {
  Logger.task('RUNNING TASK : templating')
  runSequence(
    'templating:app',
    'templating:styleguide',
  function () {
    Logger.taskComplete('FINISHED TASK : templating')
    cb()
  })
})

/* $ gulp templating:app */
gulp.task('templating:app', function () {
  return TemplateCompiler.compileGlob(
    `${config.srcDir.app.root}/index.njk`,
    config.buildDir.app.root,
    'app'
  )
})

/* $ gulp templating:styleguide */
gulp.task('templating:styleguide', function () {
  return TemplateCompiler.compileGlob(
    `${config.srcDir.styleguide.root}/index.njk`,
    config.buildDir.styleguide.root,
    'styleguide'
  )
})


/**
  $ gulp templating
  > Process .html files with Swig templating system.
  > Set up JavaScript bundles and minify .html files.
*/
// gulp.task('templating', (cb) => {
//   Logger.task('RUNNING TASK : templating')
//   runSequence(
//     'templating:process',
//     [
//       'templating:vendor-scripts',
//       'templating:minify-html',
//     ],
//   function () {
//     Logger.taskComplete('FINISHED TASK : templating')
//     cb()
//   })
// })

/* $ gulp templating:process */
// gulp.task('templating:process', function () {

//   // Get build environment settings
//   var canMinifyHTML = config.env[env].html.minify
//   var canBundle = config.env[env].scripts.bundle

//   // TEMP: Override canBundle
//   canBundle = true

//   return gulp.src(`${config.srcDir.app.root}/**/*.html`)
//     .pipe(foreach(function (stream, file) {
//       let a = fs.realpathSync(process.cwd() + '/app/view/page')
//       let b = fs.realpathSync(file.path)
//       let fileInsideDir = b.indexOf(a) == 0
//       // Only compute page dependencies for views within 'pages' dir
//       return fileInsideDir ? PageDependenciesHandler.computeDependencies(stream, file) : stream
//     }))
//     .pipe(swig({
//       setup: function (swig) {
//         swig.setDefaults({
//           autoescape: false,
//           cache: false,
//           loader: swig.loaders.fs(`${config.srcDir.app.views}/`)
//         })
//         swig.setFilter('cachebust', function (input) {
//           return CACHEBUST_HASH ? input + '?v=' + CACHEBUST_HASH : input
//         })
//         swig.setFilter('makeTextReadable', function (input) {
//           var rgb = parseInt(input, 16)   // convert rrggbb to decimal
//           var r = (rgb >> 16) & 0xff  // extract red
//           var g = (rgb >>  8) & 0xff  // extract green
//           var b = (rgb >>  0) & 0xff  // extract blue

//           var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

//           if (luma > 240)      { return '#888' }
//           else if (luma > 230) { return '#777' }
//           else if (luma > 220) { return '#666' }
//           else if (luma > 210) { return '#555' }
//           else if (luma > 200) { return '#444' }

//           return '#fff'
//         })
//         swig.setFilter('respectNewlines', function (input) {
//           return html.prettyPrint(input)
//         })
//       },
//     }))
//     .pipe(replace('<%= API_URL =%>', apiUrls[env]))
//     .pipe(canBundle ? useref({ searchPath: buildOnlyMode ? './.tmp' : './public' }) : gutil.noop())
//     .pipe(gulp.dest(config.buildDir.app.root))
// })


/* $ gulp templating:vendor-scripts */
// gulp.task('templating:vendor-scripts', function () {
//   var canUglify = config.env[env].scripts.uglify
//   return gulp.src(`${config.buildDir.app.scripts}/vendor.js`)
//     .pipe(canUglify ? uglify() : gutil.noop())
//     .pipe(gulp.dest(config.buildDir.app.scripts))
// })


/* $ gulp templating:minify-html */
// gulp.task('templating:minify-html', function () {
//   var canMinifyHTML = config.env[env].html.minify
//   return gulp.src(`${config.buildDir.app.root}/index.html`)
//     .pipe(canMinifyHTML ? htmlmin({ collapseWhitespace: true }) : gutil.noop())
//     .pipe(gulp.dest(config.buildDir.app.root))
// })
