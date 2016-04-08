/**
 * buildsys/scaffolding/PageGenerator
 * Scaffold files for new pages.
 * @author Keenan Staffieri
*/

import Helpers from '../utils/Helpers';
import FileGenerator from './FileGenerator';
import pkg from '../../package.json';


class PageGenerator extends FileGenerator {

    static scaffold(pageRef, pageName=null) {

        Logger.detail(`Scaffolding files for '${pageRef}' page...`);

        // Format the page name: Uppercase letters between spaces and dashes '-'
        var pageName = pageName ? pageName : Helpers.ucBetweenDashSpace(pageRef);

        var replaceProps = [
            ['<%= PAGE_REF =%>',  pageRef],
            ['<%= PAGE_NAME =%>', pageName],
            ['<%= AUTHOR =%>',    pkg.author.name],
        ];

        // Generate view file
        this.generateFile(pageRef, 'page/page.html', './view/page', replaceProps);

        // Generate SCSS file
        this.generateFile(pageRef, 'page/page.scss', './scss/page', replaceProps);

        // Generate SCSS dependency file
        this.generateFile(pageRef, 'page/__page.scss', './scss/page/_page-dependencies', replaceProps, '__');

        // Generate TypeScript file
        this.generateFile(pageRef, 'page/page.js', './js/page', replaceProps);
    }
}

export default PageGenerator;
