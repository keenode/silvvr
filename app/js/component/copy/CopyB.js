/**
 * js/component/copy/CopyB
 * Copy-B component script.
 * @author Keenan Staffieri
*/

class CopyB extends Component {
    constructor(selectorQuery) {
        super(selectorQuery);
        console.log('New component: Copy-B');
    }
}

$(document).ready(function ($) {
    // Init component code
    var newComponent = new CopyB('.component-copy-b');
});
