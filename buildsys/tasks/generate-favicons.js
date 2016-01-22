/**
 * tasks/generate-favicons.js
 * ------------------------------------
 * TASK: Generate Favicons
 * 'gulp generate-favicons'
*/

import fs from 'fs';
import runSequence from 'run-sequence';
import favicons from 'gulp-favicons';
import pkg from '../../package.json';

/**
    $ gulp generate-favicons
    > Generate supported favicon images for varying devices.
*/
gulp.task('generate-favicons', function (cb) {
    Logger.task('RUNNING TASK : generate-favicons');
    runSequence(
        'favicons:reset-template',
        'favicons:make',
    function () {
        Logger.taskComplete('FINISHED TASK : generate-favicons');
        cb();
    });
});


/* $ gulp favicons:reset-template */

gulp.task('favicons:reset-template', function (cb) {
    // Reset favicons template so favicons plugin can write new file paths
    return fs.writeFile(`${config.appDir.views}/partials/favicons.html`, '<link rel="favicons" href="..." />', cb);
});


/* $ gulp favicons:make */

gulp.task('favicons:make', function () {
    // Actually generate the favicon images
    return gulp.src(`${config.appDir.root}/assets/favicon.png`)
        .pipe(favicons({
            appName:        pkg.name,
            appDescription: pkg.description,
            developer:      pkg.author,
            version:        pkg.version,
            background:     'transparent',
            url:            pkg.homepage,
            logging:        config.verbose,
            path:           config.buildDir.favicons.replace(config.buildDir.root + '/', ''),
            html:           `${config.appDir.views}/partials/favicons.html`
        }))
        .pipe(gulp.dest(config.appDir.favicons));
});
