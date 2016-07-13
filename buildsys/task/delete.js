/**
 * buildsys/task/delete
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Make
 * 'gulp delete:page --ref <page-ref>'
 * 'gulp delete:component --ref <component-ref>'
*/

import PageGenerator from '../scaffolding/PageGenerator'
import ComponentGenerator from '../scaffolding/ComponentGenerator'

// Grab command line arguments
const argv = require('yargs').argv

/**
  $ gulp delete
  > Delete scaffolded files command handler.
*/
gulp.task('delete', (cb) => {
  if (argv.help) {
    Logger.help(`
-- 'delete' Command Help ------------------------------------
Delete boilerplate files for 'pages' and 'components' with these simple commands:

-- Delete a page:
    gulp delete:page --ref <page-ref>

-- Delete a component:
    gulp delete:component --ref <component-ref>
`)
  } else {
    Logger.warn('Please specify something to delete. \nEX: gulp delete:page --ref <page-ref>\n\ngulp delete --help for more info.')
  }
})

gulp.task('delete:page', (cb) => {

  if (argv.help) {
    Logger.help(`
-- 'delete:page' Command Help -----------------------------

  gulp delete:page --ref <page-ref>

  @params
    ref:
      Page reference identifier.
`)
    return false
  }

  const pageRef = argv.ref

  if (typeof pageRef === 'string') {
    return PageGenerator.delete(pageRef)
  } else {
    Logger.warn('Please provide a reference name for the page to be deleted. \nEX: gulp delete:page --ref <page-ref>')
  }
})

gulp.task('delete:component', (cb) => {

  if (argv.help) {
    Logger.help(`
-- 'delete:component' Command Help ------------------------

  gulp delete:component --ref <component-ref>

  @params
    ref:
      Component reference identifier.
`)
    return false
  }

  const componentRef = argv.ref

  if (typeof componentRef === 'string') {
    return ComponentGenerator.delete(componentRef)
  } else {
    Logger.warn('Please provide a reference name for the component to be deleted. \nEX: gulp delete:component --ref <component-ref>')
  }
})
