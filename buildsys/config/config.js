/**
 * buildsys/config/config
 * Build configuration settings.
 * @author Keenan Staffieri
*/

// It is recommended that you leave these as-is :)
const APP_ROOT = './app'
const ADMIN_ROOT = './admin'
const APP_BUILD_ROOT = './public'
const ADMIN_BUILD_ROOT = './public/admin'

export default {

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
    openBrowserOnStartup: false,
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
        minify: false,
      },
      styles: {
        optimize:   false,
        sourcemaps: true,
      },
      scripts: {
        bundle:     false,
        uglify:     false,
        stripDebug: false,
        sourcemaps: true,
      },
      cachebustAssets: false,
    },

    /**
      'Staging' environment build settings
      Command: 'gulp --stage'
    */
    stage: {
      html: {
        minify: true,
      },
      styles: {
        optimize:   true,
        sourcemaps: false,
      },
      scripts: {
        bundle:     true,
        uglify:     true,
        stripDebug: true,
        sourcemaps: false,
      },
      cachebustAssets: true,
    },

    /**
      'Production' environment build settings
      Command: 'gulp --prod'
    */
    prod: {
      html: {
        minify: true,
      },
      styles: {
        optimize:   true,
        sourcemaps: false,
      },
      scripts: {
        bundle:     true,
        uglify:     true,
        stripDebug: true,
        sourcemaps: false,
      },
      cachebustAssets: true,
    }
  },

  srcDir: {

    // Application source directory structure (app folder)
    app: {
      root:                  APP_ROOT,
      styles:                APP_ROOT + '/scss',
      pageStyleDependencies: APP_ROOT + '/scss/page/_page-dependencies',
      scripts:               APP_ROOT + '/script',
      views:                 APP_ROOT + '/view',
      components:            APP_ROOT + '/view/component',
      pages:                 APP_ROOT + '/view/page',
      favicon:               APP_ROOT + '/asset/favicon.png', // Image file used to generate favicons
      favicons:              APP_ROOT + '/asset/favicon',
      fonts:                 APP_ROOT + '/asset/font',
      images:                APP_ROOT + '/asset/image',
      videos:                APP_ROOT + '/asset/video',
    },

    // Admin source directory structure (admin folder)
    admin: {
      root:    ADMIN_ROOT,
      styles:  ADMIN_ROOT + '/scss',
      scripts: ADMIN_ROOT + '/script',
      views:   ADMIN_ROOT + '/view',
      fonts:   ADMIN_ROOT + '/asset/font',
      images:  ADMIN_ROOT + '/asset/image',
      videos:  ADMIN_ROOT + '/asset/video',
    },
  },

  buildDir: {

    // Application build directory structure (public folder)
    app: {
      root:     APP_BUILD_ROOT,
      styles:   APP_BUILD_ROOT + '/css',
      scripts:  APP_BUILD_ROOT + '/js',
      favicons: APP_BUILD_ROOT + '/asset/favicon',
      fonts:    APP_BUILD_ROOT + '/asset/font',
      images:   APP_BUILD_ROOT + '/asset/image',
      videos:   APP_BUILD_ROOT + '/asset/video',
    },

    // Admin build directory structure (public/admin folder)
    admin: {
      root:     ADMIN_BUILD_ROOT,
      styles:   ADMIN_BUILD_ROOT + '/css',
      scripts:  ADMIN_BUILD_ROOT + '/js',
      favicons: ADMIN_BUILD_ROOT + '/asset/favicon',
      fonts:    ADMIN_BUILD_ROOT + '/asset/font',
      images:   ADMIN_BUILD_ROOT + '/asset/image',
      videos:   ADMIN_BUILD_ROOT + '/asset/video',
    },
  },
}
