/**
 * buildsys/task/clean
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Clean
 * 'gulp clean'
*/

var del = require('del');

/**
    $ gulp clean
    > Delete 'dist' folder.
*/

gulp.task('clean', function () {
    return del(config.buildDir.root);
});
