/**
 * js/components/CopyA
 * CopyA component script.
 * @author Keenan Staffieri
*/

class CopyA extends Component {
    constructor(selectorQuery) {
        super(selectorQuery);
        console.log('New component: CopyA');
    }
}

$(document).ready(function ($) {
    // Init component code
    var newComponent = new CopyA('.component-copy-a');
});
