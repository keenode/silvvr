/**
 * buildsys/task/delete
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Make
 * 'gulp delete --page [page-name]'
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

  /**
    Find out of --page flag was issued
  */
  if (argv.page) {
    if (typeof argv.page === 'string') {
      return PageGenerator.delete(argv.page)
    }
    else {
      Logger.warn('Please reference the page name to be deleted. \nEX: gulp delete --page [page-name]')
    }
  }

  /**
    Find out if --component flag was issued
  */
  else if (argv.component) {
    if (typeof argv.component === 'string') {
      if (typeof argv.folder === 'string') {
        return ComponentGenerator.delete(argv.component, argv.folder)
      }
      else {
        Logger.warn('Please specify the folder location of the component to be deleted. \nEX: gulp delete --component [component-name] --folder [folder-name]')
      }
    }
    else {
      Logger.warn('Please reference the name of the component to be deleted. \nEX: gulp delete --component [component-name]')
    }
  }
  else {
    Logger.warn("Please specify what you'd like to delete. \nEX: gulp delete --page [page-name]")
  }
})
