/**
 * scaffolding/FileGenerator.js
 * Scaffold a file.
*/

import rename from 'gulp-rename';
import replace from 'gulp-replace';
import batchReplace from 'gulp-batch-replace';
import fs from 'fs';


class FileGenerator {

    static generateFile(filename, templatePath, destPath='./', replaceProps, filenamePrefix='') {

        var writeFilePath = destPath + '/' + filenamePrefix + filename + '.' + templatePath.split('.')[1];

        return fs.exists(writeFilePath, function (exists) {
            // Only generate the file if it doesn't already exists
            if( ! exists) {
                Logger.info(`Generating file: ${writeFilePath}...`);

                return gulp.src('./buildsys/scaffolding/templates/' + templatePath)
                    .pipe(batchReplace(replaceProps))
                    .pipe(rename({ basename: filenamePrefix + filename }))
                    .pipe(gulp.dest(destPath));
            }
            else {
                Logger.warn(`File located at ${writeFilePath} already exists. File will not be generated.`);
            }
        });
    }
}

export default FileGenerator;
