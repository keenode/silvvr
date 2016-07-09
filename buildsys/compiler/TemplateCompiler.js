/**
 * buildsys/compiler/TemplateCompiler
 * Compile Nunjucks (.njk) templates and distribute.
 * @author Keenan Staffieri
*/

import fs from 'fs'
import gnunjucks from 'gulp-nunjucks'
import nunjucks from 'nunjucks'
import htmlmin from 'gulp-htmlmin'
import browserSync from 'browser-sync'
import replace from 'gulp-replace'
import rename from 'gulp-rename'
import gutil from 'gulp-util'
import useref from 'gulp-useref'
import uglify from 'gulp-uglify'
import foreach from 'gulp-foreach'
import PageDependenciesHandler from '../class/PageDependenciesHandler'
import apiUrls from '../config/api-urls'

class TemplateCompiler {

  // static compileGlob (globList, destPath, taskName='') {
  static compileTemplate (templateFilePath, destPath, taskName='') {

    if (taskName !== '') taskName = ':' + taskName

    // Get build environment settings
    const canMinifyHTML = config.env[env].html.minify
    const canBundle = config.env[env].scripts.bundle

    /**
      Actually perform various transformations on the file(s).
    */
    return gulp.src(templateFilePath)
      .pipe(gnunjucks.compile({}, {
        env: new nunjucks.Environment(
          new nunjucks.FileSystemLoader('./app/view')
        )
      }))
      .pipe(replace('<%= API_URL =%>', apiUrls[env]))
      .pipe(rename({ extname: '.html' }))
      .pipe(canBundle ? useref({
        searchPath: buildOnlyMode ? './.tmp' : './public'
      }) : gutil.noop())
      .pipe(gulp.dest(destPath))
      .on('end', function () { return Logger.taskComplete('FINISHED TASK : templating' + taskName) })
  }
}

export default TemplateCompiler
