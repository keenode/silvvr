/**
 * buildsys/task/webpack
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Webpack
 * 'gulp webpack'
*/

const webpack = require('webpack')
const gutil = require('gulp-util')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../../webpack.config.js')

/* $ gulp webpack */
gulp.task('webpack', (cb) => {
  // run webpack
  webpack(webpackConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
      // output options
    }))
    cb()
  })
})

/* $ gulp webpack-dev-server */
gulp.task('webpack-dev-server', (cb) => {

  // Start a webpack-dev-server
  var compiler = webpack(webpackConfig)

  new webpackDevServer(compiler, {
    contentBase: './public',
    inline: true,
    hot: true,
    stats: {
      colors: true
    },
  }).listen(8000, 'localhost', function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)
    // Server listening
    gutil.log('[webpack-dev-server]', 'http://localhost:8000/webpack-dev-server/index.html')

    // keep the server alive or continue?
    // cb()
  })
})
