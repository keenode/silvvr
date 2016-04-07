/**
 * tasks/make.js
 * ------------------------------------
 * TASK: Make
 * 'gulp make --page [page-name]'
*/

import PageGenerator from '../scaffolding/PageGenerator';
import ComponentGenerator from '../scaffolding/ComponentGenerator';

// Grab command line arguments
var argv = require('yargs').argv;

/**
    $ gulp make
    > Make scaffolding command handler.
*/
gulp.task('make', function (cb) {

    /**
        Find out of --page flag was issued
    */
    if (argv.page) {
        if (typeof argv.page === 'string') {
            if (typeof argv.name === 'string') {
                // Pass user-specified name to Page scaffolder
                return PageGenerator.scaffold(argv.page, argv.name);
            }
            else {
                return PageGenerator.scaffold(argv.page);
            }
        }
        else {
            Logger.warn('Please define a name for the page. \nEX: gulp make --page [page-name]');
        }
    }

    /**
        Find out if --component flag was issued
    */
    else if (argv.component) {
        if (typeof argv.component === 'string') {
            if (typeof argv.folder === 'string') {
                if (typeof argv.name === 'string') {
                    // Pass user-specified name to Component scaffolder
                    return ComponentGenerator.scaffold(argv.component, argv.folder, argv.name);
                }
                else {
                    return ComponentGenerator.scaffold(argv.component, argv.folder);
                }
            }
            else {
                Logger.warn('Please specify a folder to scaffold the component. \nEX: gulp make --component [component-name] --folder [folder-name]');
            }
        }
        else {
            Logger.warn('Please define a name for the component. \nEX: gulp make --component [component-name]');
        }
    }
    else {
        Logger.warn("Please specify what you'd like to make. \nEX: gulp make --page [page-name]");
    }
});
