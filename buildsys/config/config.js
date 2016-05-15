/**
 * buildsys/config/config
 * Build configuration settings.
 * @author Keenan Staffieri
*/

// It is recommended that you leave these as-is :)
const appRoot   = './app'
const adminRoot = './admin'
const buildRoot = './public'

module.exports = {

  // Enable JavaScript ES6? (Babel)
  useES6: true,

  // Verbose logging output
  verbose: true,

  /**
    BrowserSync server settings for development.
  */
  browserSync: {
    allowReload: true, // Reload the page when file changes are made?
    injectCSS:   true, // Inject CSS changes after .css files are saved?
    port:        8000, // Server port I.E. http://localhost:8000
    uiPort:      8080, // BrowserSync UI port I.E. http://localhost:8080
    // Do you want your default browser to launch when starting Silvvr?
    openBrowserOnStartup: false
  },

  /**
    Environment-specific build settings
  */
  env: {

    /**
      Environment config descriptions
      [env_name]: {
        html.minify:    (true) Minify built HTML, stripping out all whitespace, etc.
        css.optimize:   (true) Minify all CSS and pack selectors into corresponding media queries.
        css.sourcemaps: (true) Generate CSS sourcemaps for easier debugging.
        js.bundle:      (true) Enable bundled JS files.
        js.uglify:      (true) Minify JS.
        js.stripDebug:  (true) Remove console.log and alerts from all JS.
        js.sourcemaps:  (true) Generate JS sourcemaps for easier debugging.
        cachebustAssets: Append hash to asset urls for cache busting.
      }
    */

    /**
      'Development' environment build settings
      Command: 'gulp'
    */
    dev: {
      html: {
        minify: false
      },
      styles: {
        optimize:   false,
        sourcemaps: true
      },
      scripts: {
        bundle:     false,
        uglify:     false,
        stripDebug: false,
        sourcemaps: true
      },
      cachebustAssets: false,
    },

    /**
      'Staging' environment build settings
      Command: 'gulp --stage'
    */
    stage: {
      html: {
        minify: true
      },
      styles: {
        optimize:   true,
        sourcemaps: false
      },
      scripts: {
        bundle:     true,
        uglify:     true,
        stripDebug: true,
        sourcemaps: false
      },
      cachebustAssets: true,
    },

    /**
      'Production' environment build settings
      Command: 'gulp --prod'
    */
    prod: {
      html: {
        minify: true
      },
      styles: {
        optimize:   true,
        sourcemaps: false
      },
      scripts: {
        bundle:     true,
        uglify:     true,
        stripDebug: true,
        sourcemaps: false
      },
      cachebustAssets: true,
    }
  },

  // Application directory structure (app folder)
  appDir: {
    root:                  appRoot,
    styles:                appRoot + '/scss',
    pageStyleDependencies: appRoot + '/scss/page/_page-dependencies',
    scripts:               appRoot + '/script',
    views:                 appRoot + '/view',
    components:            appRoot + '/view/component',
    pages:                 appRoot + '/view/page',
    favicon:               appRoot + '/asset/favicon.png', // Image file used to generate favicons
    favicons:              appRoot + '/asset/favicon',
    fonts:                 appRoot + '/asset/font',
    images:                appRoot + '/asset/image',
    videos:                appRoot + '/asset/video'
  },

  // Build directory structure (public folder)
  buildDir: {
    root:     buildRoot,
    styles:   buildRoot + '/css',
    scripts:  buildRoot + '/js',
    favicons: buildRoot + '/asset/favicon',
    fonts:    buildRoot + '/asset/font',
    images:   buildRoot + '/asset/image',
    videos:   buildRoot + '/asset/video'
  }
}
