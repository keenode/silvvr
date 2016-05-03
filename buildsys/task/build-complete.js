/**
 * buildsys/task/build-complete
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Build Complete
 * 'gulp build-complete'
*/

var del = require('del');
var runSequence = require('run-sequence');


/**
    $ gulp build-complete
    > Copies files from '.tmp' into 'dist'.
*/
gulp.task('build-complete', function (cb) {
    Logger.task('RUNNING TASK : build-complete');
    runSequence(
        'build-complete:copy-tmp',
        'build-complete:delete-tmp',
    function () {
        Logger.taskComplete('FINISHED TASK : build-complete');
        cb();
    });
});


/* $ gulp build-complete:copy-tmp */

gulp.task('build-complete:copy-tmp', function () {
    // Only copy '.tmp' to './dist' if build-only mode is on
    if(buildOnlyMode) {
        return gulp.src('./.tmp/**/*')
            .pipe(gulp.dest(config.oldBuildDir.root));
    }
});


/* $ gulp build-complete:delete-tmp */

gulp.task('build-complete:delete-tmp', function () {
    // Delete '.tmp' folder
    return del('./.tmp');
});