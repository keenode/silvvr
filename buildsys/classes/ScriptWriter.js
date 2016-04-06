/**
 * classes/ScriptWriter.js
 * Write scripts and bundles.
*/

import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';


class ScriptWriter {

    static compileScript(bundleScriptName, scriptPaths, destPath) {

        // Get build environment settings
        var canUglify     = config.env[env].js.uglify,
            useSourcemaps = config.env[env].js.sourcemaps;

        scriptPaths.push(`!${config.buildDir.js}/*`);

        /**
            Actually perform various transformations on the file(s).
        */
        return gulp.src(scriptPaths)
            .pipe(plumber({
                errorHandler: function (err) {
                    gutil.beep();
                    Logger.log(`JavaScript ERROR >> ${err.name} :\n ${err.message}`);
                    this.emit('end');
                }
            }))
            .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
            // Do not run TypeScript on bundles
            .pipe( ! bundleScriptName ? babel({ ignore: config.appDir.js + '/vendor/*' }) : gutil.noop())
            .pipe(bundleScriptName ? concat(bundleScriptName) : gutil.noop())
            .pipe(canUglify ? uglify({ compress: { drop_console: true } }) : gutil.noop())
            .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
            .pipe(gulp.dest(destPath))
            .on('end', function () {
                return Logger.taskComplete(
                    `FINISHED TASK : scripts${bundleScriptName ?  " for bundle '" + bundleScriptName + "'": ''}`
                );
            });
    }

    static compileLegacyScript(bundleScriptName, scriptPaths, destPath, portGlobs=false) {

        // Get build environment settings
        var canUglify     = config.env[env].js.uglify,
            // canStripDebug = config.env[env].js.stripDebug,
            useSourcemaps = config.env[env].js.sourcemaps;

        var srcSettings = {};
        if(portGlobs) {
            srcSettings = { base: config.srcDir.jsLegacy };
        }

        /**
            Actually perform various transformations on the file(s).
        */
        return gulp.src(scriptPaths, srcSettings)
            .pipe(plumber({
                errorHandler: function (err) {
                    gutil.beep();
                    Logger.log(`JavaScript ERROR >> ${err.name} :\n ${err.message}`);
                    this.emit('end');
                }
            }))
            .pipe(useSourcemaps ? sourcemaps.init() : gutil.noop())
            // .pipe(canStripDebug ? stripDebug() : gutil.noop())
            .pipe(bundleScriptName ? concat(bundleScriptName) : gutil.noop())
            .pipe(canUglify ? uglify() : gutil.noop())
            .pipe(useSourcemaps ? sourcemaps.write('sourcemaps') : gutil.noop())
            .pipe(gulp.dest(destPath))
            .on('end', function () { return Logger.taskComplete('FINISHED TASK : scripts-legacy'); });
    }
}

export default ScriptWriter;
