/**
 * js/components/Component
 * Base component class.
 * @author Keenan Staffieri
*/

class Component {
    constructor(selectorQuery) {
        this.$self   = $(selectorQuery);
        this.$window = $(window);
    }
}
