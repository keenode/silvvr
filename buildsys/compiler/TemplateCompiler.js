/**
 * buildsys/compiler/TemplateCompiler
 * Compile Nunjucks (.njk) templates and distribute.
 * @author Keenan Staffieri
*/

const nunjucks = require('gulp-nunjucks')
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync')
const replace = require('gulp-replace')
const gutil = require('gulp-util')
const useref = require('gulp-useref')
const uglify = require('gulp-uglify')
const html = require('html')
const fs = require('fs')
const foreach = require('gulp-foreach')
const PageDependenciesHandler = require('../class/PageDependenciesHandler')
const apiUrls = require('../config/api-urls')

class TemplateCompiler {

  static compileGlob (globList, destPath, taskName='') {

    if (taskName !== '') taskName = ':' + taskName

    // Get build environment settings
    var canMinifyHTML = config.env[env].html.minify
    var canBundle = config.env[env].scripts.bundle

    // TEMP: Override canBundle
    canBundle = true

    /**
      Actually perform various transformations on the file(s).
    */
    return gulp.src(globList)
      .pipe(foreach(function (stream, file) {
        let a = fs.realpathSync(process.cwd() + '/app/view/page')
        let b = fs.realpathSync(file.path)
        let fileInsideDir = b.indexOf(a) == 0
        // Only compute page dependencies for views within 'pages' dir
        return fileInsideDir ? PageDependenciesHandler.computeDependencies(stream, file) : stream
      }))
      .pipe(nunjucks.compile())
      .pipe(replace('<%= API_URL =%>', apiUrls[env]))
      .pipe(canBundle ? useref({ searchPath: buildOnlyMode ? './.tmp' : './public' }) : gutil.noop())
      .pipe(gulp.dest(destPath))
      .on('end', function () { return Logger.taskComplete('FINISHED TASK : templating' + taskName) })
  }
}

module.exports = TemplateCompiler
