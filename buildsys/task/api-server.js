/**
 * buildsys/task/api-server
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: API Server
 * 'gulp api-server'
 */

import nodemon from 'gulp-nodemon'

/**
  $ gulp api-server
  > Start up Koa 2 API server.
 */

gulp.task('api-server', function () {
  Logger.info('Starting up API server...')
  return nodemon({
    script: 'api/index.js',
    ext: 'js json njk',
    env: { 'NODE_ENV': 'development' }
  })
})
