/**
 * buildsys/scaffolding/ComponentGenerator
 * Scaffold files for new components.
*/

import fs from 'fs';
import replace from 'gulp-replace';
import FileGenerator from './FileGenerator';
import Helpers from '../utils/Helpers';


class ComponentGenerator extends FileGenerator {

    static scaffold(componentRef, folderName, componentName=null) {

        Logger.detail(`Scaffolding files for '${componentRef}' component...`);

        // Format the page name: Uppercase letters between spaces and dashes '-'
        var componentName  = componentName ? componentName : Helpers.ucBetweenDashSpace(componentRef),
            scriptFilename = Helpers.makeScriptName(componentRef);

        var replaceProps = [
            ['<%= COMPONENT_REF =%>',        componentRef],
            ['<%= COMPONENT_SCRIPTNAME =%>', scriptFilename],
            ['<%= COMPONENT_NAME =%>',       componentName],
            ['<%= COMPONENT_FOLDER =%>',     folderName],
        ];

        // Generate view file
        this.generateFile(componentRef, 'component/component.html', `./view/component/${folderName}`, replaceProps);

        // Generate SCSS file
        this.generateFile(componentRef, 'component/component.scss', `./scss/components/${folderName}`, replaceProps, '_');

        // Generate TypeScript file
        this.generateFile(scriptFilename, 'component/Component.js', `./js/components/${folderName}`, replaceProps);

        // Add entry object to components collection
        this.addCollectionEntry(componentRef, componentName, folderName, scriptFilename);
    }

    static addCollectionEntry(ref, name, folderName, scriptFilename) {

        Logger.detail('Adding component entry to collection within ./buildsys/scaffolding/Components.js...');

        var componentCollectionFile = './buildsys/components.js';

        fs.readFile(componentCollectionFile, 'utf8', function (err, data) {

            if (err) { return Logger.error(err); }

            var entryString = `{
        ref: '${ref}',
        name: '${name}',
        scssPath: '${folderName}/${ref}',
        scriptPath: '${folderName}/${scriptFilename}'
    },
    // COMPONENT AUTOMATION !! DON'T TOUCH`;

            var result = data.replace(/\/\/ COMPONENT AUTOMATION !! DON'T TOUCH/i, entryString);

            fs.writeFile(componentCollectionFile, result, 'utf8', function (err) {
                if (err) { return Logger.error(err); }
                Logger.info(`Finished writing component entry for '${ref}'.`);
            });
        });
    }
}

export default ComponentGenerator;
