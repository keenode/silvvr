/**
 * buildsys/task/clean
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Clean
 * 'gulp clean'
*/

import del from 'del';
import cache from 'gulp-cache';
import runSequence from 'run-sequence';


/**
    $ gulp clean
    > Clear gulp cache and delete original 'dist' folder.
*/
gulp.task('clean', function (cb) {
    Logger.task('RUNNING TASK : clean');
    runSequence([
        'clean:clear-cache',
        'clean:delete-dist'],
    function () {
        Logger.taskComplete('FINISHED TASK : clean');
        cb();
    });
});


/* $ gulp clean:delete-dist */

gulp.task('clean:delete-dist', function () {
    return del(config.buildDir.root);
});


/* $ gulp clean:clear-cache */

gulp.task('clean:clear-cache', function () {
    return cache.clearAll();
});
