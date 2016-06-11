/**
 * buildsys/task/make
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Make
 * 'silvvr make:page [page-name]'
 * 'silvvr make:component [component-name]'
*/

import PageGenerator from '../scaffolding/PageGenerator'
import ComponentGenerator from '../scaffolding/ComponentGenerator'

// Grab command line arguments
var argv = require('yargs').argv

// EX: Manual command:
// $ node silvvr.js --task make:page home --name 'Homepage'

/**
  $ gulp make:page
  > Make page scaffolding handler.
*/
gulp.task('make:page', (cb) => {

  var pageRef = argv._[0]

  if (typeof pageRef === 'string') {
    if (typeof argv.name === 'string') {
      // Pass user-specified name to Page scaffolder
      return PageGenerator.scaffold(pageRef, argv.name)
    }
    else {
      return PageGenerator.scaffold(pageRef)
    }
  } else {
    Logger.warn('Please define a name for the page. \nEX: silvvr make:page [page-name]')
  }
})

/**
  $ gulp make:component
  > Make component scaffolding handler.
*/
gulp.task('make:component', (cb) => {

  var componentRef = argv._[0]

  if (typeof componentRef === 'string') {
    if (typeof argv.folder === 'string') {
      if (typeof argv.name === 'string') {
        // Pass user-specified name to Component scaffolder
        return ComponentGenerator.scaffold(componentRef, argv.folder, argv.noscript, argv.name)
      }
      else {
        return ComponentGenerator.scaffold(componentRef, argv.folder, argv.noscript)
      }
    }
    else {
      Logger.warn('Please specify a folder to scaffold the component. \nEX: silvvr make:component [component-name] --folder [folder-name]')
    }
  }
  else {
    Logger.warn('Please define a name for the component. \nEX: silvvr make:component [component-name]')
  }
})
