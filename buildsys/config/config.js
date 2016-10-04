/**
 * buildsys/config/config
 * Build configuration settings.
 * @author Keenan Staffieri
 */

// Application source directory
const SRC_DIRS = {
  APP: './app',
  ADMIN: './admin'
}

// Application build directory
const BUILD_DIRS = {
  APP: './public',
  ADMIN: './public/admin'
}

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
        js.stripDebug:  (true) Remove console.log and alerts from all JS (only strips if uglify is set to true).
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
      root:                  SRC_DIRS.APP,
      styles:                SRC_DIRS.APP + '/scss',
      pageStyleDependencies: SRC_DIRS.APP + '/scss/page/_page-dependencies',
      scripts:               SRC_DIRS.APP + '/script',
      views:                 SRC_DIRS.APP + '/view',
      components:            SRC_DIRS.APP + '/view/component',
      pages:                 SRC_DIRS.APP + '/view/page',
      favicon:               SRC_DIRS.APP + '/asset/favicon.png', // Image file used to generate favicons
      favicons:              SRC_DIRS.APP + '/asset/favicon',
      fonts:                 SRC_DIRS.APP + '/asset/font',
      images:                SRC_DIRS.APP + '/asset/image',
      svgs:                  SRC_DIRS.APP + '/asset/svg',
      videos:                SRC_DIRS.APP + '/asset/video',
      patternLibrary:        SRC_DIRS.APP + '/pattern-library',
    },

    // Admin source directory structure (admin folder)
    admin: {
      root:    SRC_DIRS.ADMIN,
      styles:  SRC_DIRS.ADMIN + '/scss',
      scripts: SRC_DIRS.ADMIN + '/script',
      views:   SRC_DIRS.ADMIN + '/view',
      fonts:   SRC_DIRS.ADMIN + '/asset/font',
      images:  SRC_DIRS.ADMIN + '/asset/image',
      svgs:    SRC_DIRS.ADMIN + '/asset/svg',
      videos:  SRC_DIRS.ADMIN + '/asset/video',
    },
  },

  buildDir: {

    // Application build directory structure (public folder)
    app: {
      root:           BUILD_DIRS.APP,
      styles:         BUILD_DIRS.APP + '/css',
      scripts:        BUILD_DIRS.APP + '/js',
      favicons:       BUILD_DIRS.APP + '/asset/favicon',
      fonts:          BUILD_DIRS.APP + '/asset/font',
      images:         BUILD_DIRS.APP + '/asset/image',
      svgs:           BUILD_DIRS.APP + '/asset/svg',
      videos:         BUILD_DIRS.APP + '/asset/video',
      patternLibrary: BUILD_DIRS.APP + '/pattern-library',
    },

    // admin build directory structure (public/admin folder)
    admin: {
      root:     BUILD_DIRS.ADMIN,
      styles:   BUILD_DIRS.ADMIN + '/css',
      scripts:  BUILD_DIRS.ADMIN + '/js',
      favicons: BUILD_DIRS.ADMIN + '/asset/favicon',
      fonts:    BUILD_DIRS.ADMIN + '/asset/font',
      images:   BUILD_DIRS.ADMIN + '/asset/image',
      videos:   BUILD_DIRS.ADMIN + '/asset/video',
    },
  },
}
