/**
 * js/components/Component
 * Base Component class.
 * @author Keenan Staffieri
*/

class Component {
    constructor(selectorQuery) {
        this.$self = $(selectorQuery);
    }
}
