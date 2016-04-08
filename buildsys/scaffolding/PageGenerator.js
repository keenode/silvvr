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

        // Generate View file
        this.generateFile(pageRef, 'page/page.html', `${config.appDir.views}/page`, replaceProps);

        // Generate SCSS file
        this.generateFile(pageRef, 'page/page.scss', `${config.appDir.css}/page`, replaceProps);

        // Generate SCSS dependency file
        this.generateFile(pageRef, 'page/__page.scss', `${config.appDir.css}/page/_page-dependencies`, replaceProps, '__');

        // Generate JavaScript file
        this.generateFile(pageRef, 'page/page.js', `${config.appDir.js}/page`, replaceProps);
    }
}

export default PageGenerator;
