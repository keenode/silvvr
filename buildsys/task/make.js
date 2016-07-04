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

  gulp make:page --ref <page-ref> [--name <Page Name> --dir <path/to/page> --author <Author Name>]

  @params
    ref:
      Stands for page reference. This value is essentially used as an identifier for the page throughout the build system. Please do not use spaces, use dashes instead. (i.e. 'my-homepage' would be valid, NOT 'my homepage').

    name (optional):
      Formal name for the page. If this parameter is not specified, the system will generate one for you. (i.e. The page reference 'my-homepage', will automatically translate into 'My Homepage'). Dashes are stripped out and the first letter of each word is capitalized.

    dir (optional):
      You can scaffold page files into any nested subdirectory for better organization. (i.e. --dir about/team).

    author (optional):
      Override the default author as defined in the package.json.

    noscript (optional):
      No JavaScript file will be generated if this flag is passed.
`)
    return false
  }

  const pageRef = argv.ref
  const pageName = argv.name
  const pageDirPath = argv.dir

  if (typeof pageRef === 'string') {

    let options = {}

    // Assign user-specified page name if provided
    if (typeof pageName === 'string') {
      options.name = pageName
    }

    if (typeof pageDirPath === 'string') {
      options.dirPath = pageDirPath
    }

    options.author = argv.author

    options.noscript = argv.noscript

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

  if (argv.help) {
    Logger.help(`
-- 'make:component' Command Help --------------------------

  gulp make:component --ref <component-ref> [--name <component Name> --dir <path/to/component> --author <Author Name> --noscript]

  @params
    ref:
      Stands for component reference. This value is essentially used as an identifier for the component throughout the build system. Please do not use spaces, use dashes instead. (i.e. 'my-component' would be valid, NOT 'my component').

    name (optional):
      Formal name for the component. If this parameter is not specified, the system will generate one for you. (i.e. The component reference 'my-component', will automatically translate into 'My Component'). Dashes are stripped out and the first letter of each word is capitalized.

    dir (optional):
      You can scaffold component files into any nested subdirectory for better organization. (i.e. --dir slider/large).

    author (optional):
      Override the default author as defined in the package.json.

    noscript (optional):
      No JavaScript file will be generated if this flag is passed.
`)
    return false
  }

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

    options.author = argv.author

    options.noscript = argv.noscript

    // Now generate files for a component with the given params
    return ComponentGenerator.scaffold(componentRef, options)

  } else {
    Logger.warn('Please define a reference name for the component. \nEX: gulp make:component --ref <component-ref>')
  }
})
