/**
 * buildsys/task/make
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Make
 * 'gulp make:page --ref <page-ref> [--name <page-name>]'
 * 'gulp make:component --ref <component-ref> [--name <component-name>]'
*/

import PageGenerator from '../scaffolding/PageGenerator'
import ComponentGenerator from '../scaffolding/ComponentGenerator'

// Grab command line arguments
const argv = require('yargs').argv

/**
  $ gulp make
  > Make command (no params)
*/
gulp.task('make', (cb) => {
  if (argv.help) {
    Logger.help(`
-- MAKE Command Help --------------------------------------
You can easily scaffold boilerplate files for 'pages' and 'components' with these simple commands:

-- Scaffold a page:
    gulp make:page --ref <page-ref> [--name <page-name>]

-- Scaffold a component:
    gulp make:component --ref <component-ref> [--name <component-name>]
`)
  } else {
    Logger.warn('Please specify what you\'d like to make. \nEX: gulp make:page --ref <page-ref>')
  }
})

/**
  $ gulp make:page
  > Make page scaffolding handler.
*/
gulp.task('make:page', (cb) => {

  const pageRef = argv.ref
  const pageName = argv.name

  if (typeof pageRef === 'string') {
    if (typeof pageName === 'string') {
      // Pass user-specified name to Page scaffolder
      return PageGenerator.scaffold(pageRef, pageName)
    } else {
      return PageGenerator.scaffold(pageRef)
    }
  } else {
    Logger.warn('Please define a reference name for the page. \nEX: gulp make:page --ref <page-ref>')
  }
})

/**
  $ gulp make:component
  > Make component scaffolding handler.
*/
gulp.task('make:component', (cb) => {

  const componentRef = argv._[0]

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
      Logger.warn('Please specify a folder to scaffold the component. \nEX: gulp make:component [component-name] --folder [folder-name]')
    }
  }
  else {
    Logger.warn('Please define a name for the component. \nEX: gulp make:component [component-name]')
  }
})
