/**
 * buildsys/task/styles
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 * 'gulp styles'
*/

import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';


/* $ gulp styles */

gulp.task('styles', function () {

    Logger.task('RUNNING TASK : styles');

    // Get build environment settings
    var optimizeCSS   = config.env[env].css.optimize,
        useSourcemaps = config.env[env].css.sourcemaps;

    var sassOutputStyle = 'expanded';
    if(optimizeCSS) { sassOutputStyle = 'compressed'; }

    // Copy and process css files to build dir
    return gulp.src(`${config.appDir.css}/**/*.{scss,sass}`)
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.beep();
                Logger.error(`CSS ERROR >> ${err.name} :\n ${err.message}`);
                this.emit('end');
            }
        }))
        .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
        .pipe(sass({ outputStyle: sassOutputStyle }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [ 'last 2 versions' ],
            cascade: false
        }))
        .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
        .pipe(gulp.dest(config.buildDir.css))
        .pipe(config.browserSync.injectCSS ? browserSync.stream() : gutil.noop())
        .on('end', function () { return Logger.taskComplete('FINISHED TASK : styles'); });
});
