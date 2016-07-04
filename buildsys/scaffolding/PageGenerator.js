/**
 * buildsys/scaffolding/PageGenerator
 * Scaffold files for new pages.
 * @author Keenan Staffieri
*/

import del from 'del'
import Helpers from '../util/Helpers'
import FileGenerator from './FileGenerator'
import pkg from '../../package.json'

class PageGenerator extends FileGenerator {

  static scaffold (pageRef, options=null) {

    Logger.detail(`Scaffolding files for '${pageRef}' page...`)

    // Format the page name: Uppercase letters between spaces and dashes '-'
    const pageNameFormatted = options.name ? options.name : Helpers.ucBetweenDashSpace(pageRef)

    const replaceProps = [
      ['<%= PAGE_REF =%>',  pageRef],
      ['<%= PAGE_NAME =%>', pageNameFormatted],
      ['<%= AUTHOR =%>',    pkg.author.name],
    ]

    // Generate View file
    this.generateFile(pageRef, 'page/page.njk', config.srcDir.app.pages, replaceProps)

    // Generate SCSS file
    this.generateFile(pageRef, 'page/page.scss', `${config.srcDir.app.styles}/page`, replaceProps)

    // Generate SCSS dependency file
    this.generateFile(pageRef, 'page/__page.scss', config.srcDir.app.pageStyleDependencies, replaceProps, '__')

    // Generate JavaScript file
    this.generateFile(pageRef, 'page/page.js', `${config.srcDir.app.scripts}/page`, replaceProps)
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
