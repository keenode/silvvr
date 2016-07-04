/**
 * app/script/component<%= COMPONENT_DIRPATH =%>/<%= COMPONENT_SCRIPTNAME =%>
 * <%= COMPONENT_NAME =%> component script.
 * @author <%= AUTHOR =%>
*/

class <%= COMPONENT_SCRIPTNAME =%> extends Component {
  constructor (selectorQuery) {
    super(selectorQuery)
    console.log('<%= COMPONENT_NAME =%> initialized.')
  }
}

$(document).ready(function ($) {
  // Init component code
  new <%= COMPONENT_SCRIPTNAME =%>('.component-<%= COMPONENT_REF =%>')
})
