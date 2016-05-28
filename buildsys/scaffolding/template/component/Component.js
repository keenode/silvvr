/**
 * app/script/component/<%= COMPONENT_FOLDER =%>/<%= COMPONENT_SCRIPTNAME =%>
 * <%= COMPONENT_NAME =%> component script.
 * @author <%= AUTHOR =%>
*/

class <%= COMPONENT_SCRIPTNAME =%> extends Component {
  constructor(selectorQuery) {
    super(selectorQuery);
    console.log('New component: <%= COMPONENT_NAME =%>');
  }
}

$(document).ready(function ($) {
  // Init component code
  var newComponent = new <%= COMPONENT_SCRIPTNAME =%>('.component-<%= COMPONENT_REF =%>');
});
