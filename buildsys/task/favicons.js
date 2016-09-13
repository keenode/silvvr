/**
 * buildsys/task/favicons
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Favicons
 * 'gulp favicons'
 */

import fs from 'fs'
import runSequence from 'run-sequence'

/* $ gulp favicons */
gulp.task('favicons', function () {
  // Copy favicon images to favicons build dir
  Logger.task('RUNNING TASK : favicons')
  return gulp.src(`${config.srcDir.app.favicons}/**/*.*`)
    .pipe(gulp.dest(config.buildDir.app.favicons))
    .on('end', function () { return Logger.taskComplete('FINISHED TASK : favicons') })
})
