/**
 * buildsys/config/config
 * Build configuration settings.
 * @author Keenan Staffieri
*/

// It is recommended that you leave these as-is :)
const appRoot   = './app',
      buildRoot = './dist';


export default {

    // Enable JavaScript ES6? (Babel)
    useES6: true,

    // Verbose logging output
    verbose: true,

    pageStylesDependenciesPath: './app/scss/page/_page-dependencies',

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
                images.pngOptimization: PNG Optimization level from 0 (least, fast) to 7 (most, slow) optimized.
                images.svgMultipass: Optimize svg multiple times until it's fully optimized.
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
            css: {
                optimize:   false,
                sourcemaps: true
            },
            js: {
                bundle:     false,
                uglify:     false,
                stripDebug: false,
                sourcemaps: true
            },
            images: {
                pngOptimization: 3,
                svgMultipass: false
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
            css: {
                optimize:   true,
                sourcemaps: false
            },
            js: {
                bundle:     true,
                uglify:     true,
                stripDebug: true,
                sourcemaps: false
            },
            images: {
                pngOptimization: 6,
                svgMultipass: true
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
            css: {
                optimize:   true,
                sourcemaps: false
            },
            js: {
                bundle:     true,
                uglify:     true,
                stripDebug: true,
                sourcemaps: false
            },
            images: {
                pngOptimization: 6,
                svgMultipass: true
            },
            cachebustAssets: true,
        }
    },

    // Application directory structure (app folder)
    appDir: {
        root:     appRoot,
        css:      appRoot + '/scss',
        js:       appRoot + '/js',
        views:    appRoot + '/view',
        favicon:  appRoot + '/asset/favicon.png', // Image file used to generate favicons
        favicons: appRoot + '/asset/favicon',
        fonts:    appRoot + '/asset/font',
        images:   appRoot + '/asset/image',
        videos:   appRoot + '/asset/video'
    },

    // Build directory structure (dist folder)
    buildDir: {
        root:     buildRoot,
        css:      buildRoot + '/css',
        js:       buildRoot + '/js',
        favicons: buildRoot + '/asset/favicon',
        fonts:    buildRoot + '/asset/font',
        images:   buildRoot + '/asset/image',
        videos:   buildRoot + '/asset/video'
    }
};
