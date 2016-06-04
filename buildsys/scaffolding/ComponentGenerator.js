/**
 * buildsys/scaffolding/ComponentGenerator
 * Scaffold files for new components.
 * @author Keenan Staffieri
*/

const fs = require('fs')
const del = require('del')
const FileGenerator = require('./FileGenerator')
const Helpers = require('../util/Helpers')
const pkg = require('../../package.json')


class ComponentGenerator extends FileGenerator {

  static scaffold (componentRef, folderName, noScript, componentName=null) {

    Logger.detail(`Scaffolding files for '${componentRef}' component...`)

    // Format the page name: Uppercase letters between spaces and dashes '-'
    var componentNameFormatted = componentName ? componentName : Helpers.ucBetweenDashSpace(componentRef)
    var scriptFilename = null

    if ( ! noScript) {
      scriptFilename = Helpers.makeScriptName(componentRef)
    }

    var replaceProps = [
      ['<%= COMPONENT_REF =%>',        componentRef],
      ['<%= COMPONENT_SCRIPTNAME =%>', scriptFilename],
      ['<%= COMPONENT_NAME =%>',       componentNameFormatted],
      ['<%= COMPONENT_FOLDER =%>',     folderName],
      ['<%= AUTHOR =%>',               pkg.author.name],
    ]

    // Generate View file
    this.generateFile(componentRef, 'component/component.njk', `${config.srcDir.app.components}/${folderName}`, replaceProps)

    // Generate SCSS file
    this.generateFile(componentRef, 'component/component.scss', `${config.srcDir.app.styles}/component/${folderName}`, replaceProps, '_')

    // Generate JavaScript file
    if (scriptFilename !== null) {
      this.generateFile(scriptFilename, 'component/Component.js', `${config.srcDir.app.scripts}/component/${folderName}`, replaceProps)
    }

    // Add entry object to components collection
    this.addCollectionEntry(componentRef, componentNameFormatted, folderName, scriptFilename)
  }

  static addCollectionEntry (ref, name, folderName, scriptFilename) {

    Logger.detail('Adding component entry to collection within ./buildsys/components.js...')

    var componentCollectionFile = './buildsys/components.js'
    var scriptPathString = ''

    if (scriptFilename !== null) {
        scriptPathString = `
    scriptPath: '${folderName}/${scriptFilename}',`
    }

    fs.readFile(componentCollectionFile, 'utf8', function (err, data) {

      if (err) { return Logger.error(err) }

      var entryString = `{
  ref: '${ref}',
  name: '${name}',
  scssPath: '${folderName}/${ref}',${scriptPathString}
},
// COMPONENT AUTOMATION !! DON'T TOUCH`

        var result = data.replace(/\/\/ COMPONENT AUTOMATION !! DON'T TOUCH/i, entryString)

        fs.writeFileSync(componentCollectionFile, result, 'utf8', function (err) {
            if (err) { return Logger.error(err) }
            Logger.info(`Finished writing component entry for '${ref}'.`)
        })
    })
  }

  static delete (componentRef, folderName) {
    var scriptFilename = Helpers.makeScriptName(componentRef)
    return del([ `${config.srcDir.app.components}/${folderName}/${componentRef}.njk`,
                 `${config.srcDir.app.syles}/component/${folderName}/_${componentRef}.scss`,
                 `${config.srcDir.app.scripts}/component/${folderName}/${scriptFilename}.js`,
    ], { force: true }).then(paths => {
      return Logger.info(`Deleted all files for ${componentRef} component.`)
    })
  }
}

module.exports = ComponentGenerator
