/**
 * buildsys/task/make
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Make
 * 'gulp make:page --ref <page-ref> [--name <Page Name>]'
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
-- 'make' Command Help ------------------------------------
You can easily scaffold boilerplate files for 'pages' and 'components' with these simple commands:

-- Scaffold a page:
    gulp make:page --ref <page-ref> [--name <Page Name>]

-- Scaffold a component:
    gulp make:component --ref <component-ref> [--name <component-name>]
`)
  } else {
    Logger.warn('Please specify what you\'d like to make. \nEX: gulp make:page --ref <page-ref>\n\ngulp make --help for more info.')
  }
})

/**
  $ gulp make:page
  > Make page scaffolding handler.
*/
gulp.task('make:page', (cb) => {

  if (argv.help) {
    Logger.help(`
-- 'make:page' Command Help -------------------------------

  gulp make:page --ref <page-ref> [--name <Page Name>]

  @params
    ref:
      Stands for page reference. This value is essentially used as an identifier for the page throughout the build system. Please do not use spaces, use dashes instead. (i.e. 'my-homepage' would be valid, NOT 'my homepage').

    name (optional):
      Formal name for the page. If this parameter is not specified, the system will generate one for you. (i.e. The page reference 'my-homepage', will automatically translate into 'My Homepage'). Dashes are stripped out and the first letter of each word is capitalized.
`)
    return false
  }

  const pageRef = argv.ref
  const pageName = argv.name

  if (typeof pageRef === 'string') {

    let options = {}

    // Assign user-specified page name if provided
    if (typeof pageName === 'string') {
      options.name = pageName
    }

    // Now generate files for a page with the given params
    return PageGenerator.scaffold(pageRef, options)

  } else {
    Logger.warn('Please define a reference name for the page. \nEX: gulp make:page --ref <page-ref>')
  }
})

/**
  $ gulp make:component
  > Make component scaffolding handler.
*/
gulp.task('make:component', (cb) => {

  const componentRef = argv.ref
  const componentName = argv.name
  const componentDirPath = argv.dir

  if (typeof componentRef === 'string') {

    let options = {}

    if (typeof componentName === 'string') {
      options.name = componentName
    }

    if (typeof componentDirPath === 'string') {
      options.dirPath = componentDirPath
    }

    options.noscript = argv.noscript

    // Now generate files for a component with the given params
    return ComponentGenerator.scaffold(componentRef, options)

  } else {
    Logger.warn('Please define a reference name for the component. \nEX: gulp make:component --ref <component-ref>')
  }
})
