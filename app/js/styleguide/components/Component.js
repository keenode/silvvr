/**
 * components/Component
 * Component base class.
*/

class Component {

    constructor(selectorQuery) {
        this.baseClass = 'sg-component';
        this.$selector = $(selectorQuery);
        this.$window   = $(window);
    }
}
