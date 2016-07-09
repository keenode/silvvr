/**
 * app/script/component/Test
 * Test component script.
 * @author Keenan Staffieri
*/

class Test extends Component {
  constructor (selectorQuery) {
    super(selectorQuery)
    console.log('Test initialized.')
  }
}

$(document).ready(function ($) {
  // Init component code
  new Test('.component-test')
})
