/**
 * components/<%= COMPONENT_FOLDER =%>/<%= COMPONENT_SCRIPTNAME =%>
 * <%= COMPONENT_NAME =%> component script.
*/

/// <reference path='../../../typings/tsd.d.ts' />


jQuery(document).ready(function ($) {

    class <%= COMPONENT_SCRIPTNAME =%> {

        private $element: JQuery;

        constructor(selectorQuery: string) {
            console.log('New component: <%= COMPONENT_NAME =%>');
            this.$element = $(selectorQuery);
        }
    }


    // Init code
    var newComponent = new <%= COMPONENT_SCRIPTNAME =%>('.component-<%= COMPONENT_REF =%>');

});
