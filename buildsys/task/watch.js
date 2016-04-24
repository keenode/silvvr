/**
 * buildsys/task/watch
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch
 * 'gulp watch'
*/

import runSequence from 'run-sequence';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';


/**
    $ gulp watch
    > Watch files for changes and run associated build tasks.
*/

gulp.task('watch', function () {

    // Only watch files if build-only mode is off
    if( ! buildOnlyMode) {

        Logger.task('RUNNING TASK : watch');

        watch(`${config.appDir.root}/*`, {
            name: 'Rootfiles Watcher',
            verbose: config.verbose
        }, function () {
            gulp.start('rootfiles');
        });

        watch(`${config.appDir.css}/**/*.{scss,sass}`, {
            name: 'SASS Watcher',
            verbose: config.verbose
        }, function () {
            gulp.start('styles');
        });

        watch(`${config.appDir.js}/**/*.js`, {
            name: 'Scripts Watcher',
            verbose: config.verbose
        }, function () {
            gulp.start('page-scripts-changed');
        });

        watch(`${config.appDir.root}/**/*.html`, {
            name: 'HTML Watcher',
            verbose: config.verbose
        }, function () {
            gulp.start('template-change');
        });

        watch(`${config.appDir.images}/**/*.{png,jpg,jpeg,gif,svg}`, {
            name: 'Images Watcher',
            verbose: config.verbose
        }, function () {
            gulp.start('images');
        });

        watch(`${config.appDir.fonts}/**/*`, {
            name: 'Fonts Watcher',
            verbose: config.verbose
        }, function (vinyl) {
            gulp.start('fonts');
        });

        watch(`${config.appDir.videos}/**/*`, {
            name: 'Videos Watcher',
            verbose: config.verbose
        }, function () {
            gulp.start('videos');
        });

        watch([
            `${config.buildDir.root}/*`,
            `${config.buildDir.js}/**/*.js`,
            `${config.buildDir.root}/**/*.html`,
            `${config.buildDir.images}/**/*.{png,jpg,jpeg,gif,svg}`,
            `${config.buildDir.favicons}/*`,
            `${config.buildDir.fonts}/**/*`,
            `${config.buildDir.videos}/**/*`
        ], {
            name: 'Post-Build Watcher',
            verbose: config.verbose
        }).on('change', function () {
            if(config.browserSync.allowReload) {
                browserSync.reload();
            }
        });
    }
});

gulp.task('page-scripts-changed', function (cb) {
    return runSequence(
        'scripts',
        'page-scripts-bundle'
    , cb);
});

gulp.task('template-change', function (cb) {
    return runSequence(
        'scripts',
        'templating'
    , cb);
});
