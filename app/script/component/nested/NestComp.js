/**
 * app/script/component/nested/NestComp
 * Nest Comp component script.
 * @author Keenan Staffieri
*/

class NestComp extends Component {
  constructor (selectorQuery) {
    super(selectorQuery)
    console.log('Nest Comp initialized.')
  }
}

$(document).ready(function ($) {
  // Init component code
  new NestComp('.component-nest-comp')
})
