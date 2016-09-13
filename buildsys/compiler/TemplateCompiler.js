/**
 * buildsys/compiler/TemplateCompiler
 * Compile Nunjucks (.njk) templates and distribute.
 * @author Keenan Staffieri
 */

import gnunjucks from 'gulp-nunjucks'
import nunjucks from 'nunjucks'
import batchReplace from 'gulp-batch-replace'
import rename from 'gulp-rename'
import gutil from 'gulp-util'
import useref from 'gulp-useref'
import apiUrls from '../config/api-urls'

class TemplateCompiler {

  static compileTemplate (templateFilePath, destPath, taskName='', cb) {

    if (taskName !== '') taskName = ':' + taskName

    // Get build environment settings
    const canMinifyHTML = config.env[env].html.minify
    const canBundle = config.env[env].scripts.bundle

    const replaceProps = [
      ['<%= API_URL =%>', apiUrls[env]],
      ['<%= CACHEBUST_HASH =%>', CACHEBUST_HASH ? '?v=' + CACHEBUST_HASH : ''],
    ]

    /**
      Compile Nunjucks template file and output to destPath.
     */
    return gulp.src(templateFilePath)
      .pipe(gnunjucks.compile({}, {
        env: new nunjucks.Environment(
          new nunjucks.FileSystemLoader('./app/view')
        )
      }))
      .pipe(batchReplace(replaceProps))
      .pipe(rename({ extname: '.html' }))
      .pipe(canBundle ? useref({
        searchPath: buildOnlyMode ? './.tmp' : './public'
      }) : gutil.noop())
      .pipe(gulp.dest(destPath))
      .on('end', function () {
        cb()
        return Logger.taskComplete('FINISHED TASK : templating' + taskName)
      })
  }
}

export default TemplateCompiler
