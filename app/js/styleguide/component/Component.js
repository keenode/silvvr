/**
 * js/styleguide/component/Component
 * Component base class.
 * @author Keenan Staffieri
*/

class Component {

    constructor(selectorQuery) {
        this.baseClass = 'sg-component';
        this.$self     = $(selectorQuery);
        this.$window   = $(window);
    }
}
