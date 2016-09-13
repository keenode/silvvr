/**
 * buildsys/task/generate-favicons
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Generate Favicons
 * 'gulp generate-favicons'
 */

import favicons from 'gulp-favicons'
import pkg from '../../package.json'

/**
  $ gulp generate-favicons
  > Generate supported favicon images for varying devices.
 */
gulp.task('generate-favicons', (cb) => {

  Logger.task('RUNNING TASK : generate-favicons')

  return gulp.src(`${config.srcDir.app.root}/asset/favicon.png`)
    .pipe(favicons({
      appName:        pkg.name,
      appDescription: pkg.description,
      developer:      pkg.author,
      version:        pkg.version,
      background:     'transparent',
      url:            pkg.homepage,
      logging:        config.verbose,
      path:           config.buildDir.app.favicons.replace(config.buildDir.app.root + '/', ''),
      html:           `${config.srcDir.app.views}/partial/favicons.njk`,
    }))
    .pipe(gulp.dest(config.srcDir.app.favicons))
})
