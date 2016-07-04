/**
 * buildsys/scaffolding/PageGenerator
 * Scaffold files for new pages.
 * @author Keenan Staffieri
*/

import fs from 'fs'
import del from 'del'
import Helpers from '../util/Helpers'
import FileGenerator from './FileGenerator'
import pkg from '../../package.json'

class PageGenerator extends FileGenerator {

  static scaffold (pageRef, options=null) {

    Logger.detail(`Scaffolding files for '${pageRef}' page...`)

    // Format the page name: Uppercase letters between spaces and dashes '-'
    const pageNameFormatted = options.name ? options.name : Helpers.ucBetweenDashSpace(pageRef)

    let dirPath = ''
    if (options.dirPath) {
      dirPath = '/' + options.dirPath
    }

    let author = pkg.author.name
    if (options.author) {
      author = options.author
    }

    const replaceProps = [
      ['<%= PAGE_REF =%>',     pageRef],
      ['<%= PAGE_NAME =%>',    pageNameFormatted],
      ['<%= PAGE_DIRPATH =%>', dirPath],
      ['<%= AUTHOR =%>',       author],
    ]

    // Generate View file
    this.generateFile(pageRef, 'page/page.njk', `${config.srcDir.app.pages}${dirPath}`, replaceProps)

    // Generate SCSS file
    this.generateFile(pageRef, 'page/page.scss', `${config.srcDir.app.styles}/page${dirPath}`, replaceProps)

    // Generate SCSS dependency file
    this.generateFile(pageRef, 'page/__page.scss', `${config.srcDir.app.pageStyleDependencies}${dirPath}`, replaceProps, '__')

    // Generate JavaScript file
    if ( ! options.noscript) {
      this.generateFile(pageRef, 'page/page.js', `${config.srcDir.app.scripts}/page${dirPath}`, replaceProps)
    }

    // Add entry object to pages collection
    this.addCollectionEntry(pageRef, pageNameFormatted, options.dirPath, options.noscript)
  }

  static addCollectionEntry (ref, name, dirPath, noScript) {

    Logger.detail('Adding page entry to collection within ./buildsys/data/pages.js...')

    dirPath = dirPath ? dirPath + '/' : ''

    const pageCollectionFile = './buildsys/data/pages.js'
    let scriptPathString = ''

    if ( ! noScript) {
        scriptPathString = `
  scriptPath: '${dirPath}${ref}',`
    }

    fs.readFile(pageCollectionFile, 'utf8', function (err, data) {

      if (err) { return Logger.error(err) }

      const entryString = `{
  ref: '${ref}',
  name: '${name}',
  scssPath: '${dirPath}${ref}',${scriptPathString}
},
// PAGE AUTOMATION !! DON'T TOUCH`

      const result = data.replace(/\/\/ PAGE AUTOMATION !! DON'T TOUCH/i, entryString)

      fs.writeFileSync(pageCollectionFile, result, 'utf8', function (err) {
          if (err) { return Logger.error(err) }
          Logger.info(`Finished writing page entry for '${ref}'.`)
      })
    })
  }

  static delete (pageRef) {
    return del([ `${config.srcDir.app.pages}/${pageRef}.njk`,
                 `${config.srcDir.app.styles}/page/${pageRef}.scss`,
                 `${config.srcDir.app.pageStyleDependencies}/__${pageRef}.scss`,
                 `${config.srcDir.app.scripts}/page/${pageRef}.js`,
    ], { force: true }).then(paths => {
      return Logger.info(`Deleted all files for ${pageRef} page.`)
    })
  }
}

export default PageGenerator
