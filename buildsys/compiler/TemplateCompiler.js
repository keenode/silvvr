/**
 * buildsys/compiler/TemplateCompiler
 * Compile Nunjucks (.njk) templates and distribute.
 * @author Keenan Staffieri
*/

import gnunjucks from 'gulp-nunjucks'
import nunjucks from 'nunjucks'
import replace from 'gulp-replace'
import rename from 'gulp-rename'
import gutil from 'gulp-util'
import useref from 'gulp-useref'
import apiUrls from '../config/api-urls'

class TemplateCompiler {

  static compileTemplate (templateFilePath, destPath, taskName='') {

    if (taskName !== '') taskName = ':' + taskName

    // Get build environment settings
    const canMinifyHTML = config.env[env].html.minify
    const canBundle = config.env[env].scripts.bundle

    /**
      Compile Nunjucks template file and output to destPath.
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
