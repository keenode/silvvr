/**
 * buildsys/scaffolding/FileGenerator
 * Scaffold a file.
 * @author Keenan Staffieri
*/

import fs from 'fs'
import rename from 'gulp-rename'
import batchReplace from 'gulp-batch-replace'

class FileGenerator {

  static generateFile (filename, templatePath, destPath='./', replaceProps, filenamePrefix='') {

    var writeFilePath = destPath + '/' + filenamePrefix + filename + '.' + templatePath.split('.')[1]

    return fs.exists(writeFilePath, function (exists) {
      // Only generate the file if it doesn't already exists
      if ( ! exists) {
        Logger.info(`Generating file: ${writeFilePath}...`)

        return gulp.src('./buildsys/scaffolding/template/' + templatePath)
            .pipe(batchReplace(replaceProps))
            .pipe(rename({ basename: filenamePrefix + filename }))
            .pipe(gulp.dest(destPath))
      }
      else {
        Logger.warn(`File located at ${writeFilePath} already exists. File will not be generated.`)
      }
    })
  }
}

module.exports = FileGenerator
