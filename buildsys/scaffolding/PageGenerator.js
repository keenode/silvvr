/**
 * scaffolding/PageGenerator.js
 * Scaffold files for new pages.
*/

import Helpers from '../utils/Helpers';
import FileGenerator from './FileGenerator';


class PageGenerator extends FileGenerator {

    static scaffold(pageRef, pageName=null) {

        Logger.detail(`Scaffolding files for '${pageRef}' page...`);

        // Format the page name: Uppercase letters between spaces and dashes '-'
        var pageName = pageName ? pageName : Helpers.ucBetweenDashSpace(pageRef);

        var replaceProps = [
            ['<%= PAGE_REF =%>',  pageRef],
            ['<%= PAGE_NAME =%>', pageName],
        ];

        // Generate view file
        this.generateFile(pageRef, 'page/page.html', './view/page', replaceProps);

        // Generate SCSS file
        this.generateFile(pageRef, 'page/page.scss', './scss/pages', replaceProps);

        // Generate SCSS dependency file
        this.generateFile(pageRef, 'page/__page.scss', './scss/pages/_page-dependencies', replaceProps, '__');

        // Generate TypeScript file
        this.generateFile(pageRef, 'page/page.ts', './js/pages', replaceProps);
    }
}

export default PageGenerator;
