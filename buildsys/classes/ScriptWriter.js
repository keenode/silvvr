/**
 * buildsys/classes/ScriptWriter
 * Write scripts and bundles.
 * @author Keenan Staffieri
*/

var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');


class ScriptWriter {

    static compileScript(bundleScriptName, scriptPaths, destPath) {

        // Get build environment settings
        var canUglify     = config.env[env].js.uglify,
            useSourcemaps = config.env[env].js.sourcemaps;

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
}

module.exports = ScriptWriter;
