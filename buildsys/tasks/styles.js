/**
 * tasks/styles.js
 * ------------------------------------
 * TASK: Styles
 * 'gulp styles'
*/

import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import csswring from 'csswring';
import cssnext from 'cssnext';
import neat from 'postcss-neat';
import normalize from 'postcss-normalize';
import cssImport from 'postcss-import';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';

/* $ gulp styles */

gulp.task('styles', function () {

    logger.log('RUNNING TASK : styles', 'runTask');

    // Get build environment settings
    var optimizeCSS   = config.env[env].css.optimize,
        useSourcemaps = config.env[env].css.sourcemaps;

    // Set up PostCSS processors
    var processors = [
        cssImport,
        autoprefixer({ browsers: ['last 2 versions'] }),
        cssnext(),
        neat({
            neatGridColumns: 12,
            neatMaxWidth: '1200px',
            neatGutterWidth: '1.618em'
        }),
        normalize
    ];

    /**
        Add CSS minifications and media query packing
        if environment allows for it.
    */
    if(optimizeCSS) {
        processors.push(mqpacker);
        processors.push(csswring);
    }

    // Copy and process css files to build dir
    return gulp.src(`${config.appDir.css}/**/*.css`)
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.beep();
                logger.log(`CSS ERROR >> ${err.name} :\n ${err.message}`);
                this.emit('end');
            }
        }))
        .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
        .pipe(postcss(processors))
        .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
        .pipe(gulp.dest(config.buildDir.css))
        .pipe(config.browserSync.injectCSS ? browserSync.stream() : gutil.noop());
});
