/**
 * buildsys/classes/PageDependenciesHandler
 * Write scripts and bundles.
 * @author Keenan Staffieri
*/

import fs from 'fs'
import Helpers from '../util/Helpers'
import ComponentCollection from '../scaffolding/ComponentCollection'
import PageCollection from '../scaffolding/PageCollection'
import ScriptWriter from './ScriptWriter'

class PageDependenciesHandler {

  static computeDependencies (stream, file, scriptsOnly=false, silent=false) {

    if ( ! silent) {
      Logger.info('Reading template: ' + file.path)
    }

    /**
      Find page name
    */
    let pageName = /{#\s*Page:\s(.*)\s/i.exec(file.contents)
    if (pageName !== null) {
      pageName = pageName[1]

      /**
        Find page reference name
      */
      let pageRef = /{#\s*.*\s*.*\s*Reference:\s(.*?)\s/i.exec(file.contents)
      if (pageRef !== null) {
        pageRef = pageRef[1]

        if ( ! silent) {
          Logger.detail(`Page: ${pageName} [ ${pageRef} ]`)
        }

        /**
          Find component names
        */
        const componentMatches = file.contents.toString().match(/{#\s*Component\:\s*(.*?)\s*#}/ig)
        let componentNames = []

        if (componentMatches !== null) {
          for (let i = 0; i < componentMatches.length; i++) {
            const componentName = /{#\s*Component\:\s*(.*?)\s*#}/ig.exec(componentMatches[i])[1]
            componentNames.push(componentName)
          }
        }

        // Filter out any dupe names
        componentNames = Helpers.uniqueItemsOnly(componentNames)

        if ( ! silent) {
          Logger.detail('Found components: ' + componentNames)
        }

        // Write page dependencies for component styles
        if ( ! scriptsOnly) {
          PageDependenciesHandler.writeStylesDependencies(pageRef, componentNames)
        }
        PageDependenciesHandler.bundleScriptDependencies(pageRef, componentNames)
      }
      else {
        Logger.warn('Page reference not defined for ' + file.path)
      }
    }
    else {
      Logger.warn('Page name not defined for ' + file.path)
    }

    return stream
  }

  static writeStylesDependencies (pageRef, componentNames) {

    Logger.info(`Writing component style dependencies for '${pageRef}'...`)

    const page = PageCollection.getPageByReference(pageRef)
    const relativeUpDir = '../'.repeat(page.dirPath.split('/').length - 1)

    // Prepare scss import lines for file
    let importString = "// BEGIN: Import required component styles !! DON'T TOUCH\n"
    for (let i = 0; i < componentNames.length; i++) {
      const foundComponent = ComponentCollection.getComponentByName(componentNames[i])
      if (foundComponent !== null) {
        importString += `@import '${relativeUpDir}../../component/${foundComponent.scssPath}';\n`
      }
    }
    importString += "// END: Import required component styles !! DON'T TOUCH"

    const pageDependsFilePath = `${config.srcDir.app.pageStyleDependencies}/${page.dirPath}__${pageRef}.scss`

    /**
      Now read / write required component SASS imports
    */
    fs.readFile(pageDependsFilePath, 'utf8', function (err, data) {

      if (err) return Logger.error(err)

      const result = data.replace(/\/\/ BEGIN: Import required component styles !! DON'T TOUCH\s*([^<]*)\s*\/\/ END: Import required component styles !! DON'T TOUCH/i, importString)

      fs.writeFileSync(pageDependsFilePath, result, 'utf8', function (err) {
        if (err) return Logger.error(err)
        Logger.info(`Finished writing component style dependencies for '${pageRef}'.`)
      })
    })
  }

  static bundleScriptDependencies (pageRef, componentNames) {

    Logger.info(`Bundling component script dependencies for '${pageRef}'...`)

    let scriptPaths = []

    for (let i = 0; i < componentNames.length; i++) {
      const foundComponent = ComponentCollection.getComponentByName(componentNames[i])
      if (foundComponent !== null) {
        scriptPaths.push(`${config.buildDir.app.scripts}/component/${foundComponent.scriptPath}.js`)
      }
    }

    scriptPaths.push(`${config.buildDir.app.scripts}/page/${pageRef}.js`)
    ScriptWriter.compileScript(pageRef + '.js', scriptPaths, config.buildDir.app.scripts + '/page')
  }
}

export default PageDependenciesHandler
