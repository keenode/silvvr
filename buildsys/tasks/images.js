/**
 * tasks/images.js
 * ------------------------------------
 * TASK: Images
 * 'gulp images'
*/

import newer from 'gulp-newer';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';

/* $ gulp images */

gulp.task('images', function () {

    logger.log('RUNNING TASK : images', 'runTask');

    // Get build environment settings
    var pngOptimization = config.env[env].images.pngOptimization,
        svgMultipass    = config.env[env].images.svgMultipass;

    // Copy and optimize images to build dir
    return gulp.src(`${config.appDir.images}/**/*.{png,jpg,jpeg,gif,svg}`)
        .pipe(newer(config.buildDir.images))
        .pipe(cache(imagemin({
            optimizationLevel: pngOptimization,
            multipass: svgMultipass
        })))
        .pipe(gulp.dest(config.buildDir.images));
});
