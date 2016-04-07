/**
 * js/styleguide/component/BackToTop
 * @author Keenan Staffieri
*/

class BackToTop extends Component {

    constructor(selectorQuery) {
        super(selectorQuery);
        this.baseClass       = 'sg-backtotop';
        this.showClass       = `${this.baseClass}--show`;
        this.scrollThreshold = this.$window.height() / 2;
        this.initEvents();
    }

    initEvents() {
        this.$self.on('click', (e) => {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 });
        });

        this.$window.on('scroll.backToTop', () => {
            var scrollTop = this.$window.scrollTop();
            if (scrollTop > this.scrollThreshold) {
                this.$self.addClass(this.showClass);
            }
            else {
                this.$self.removeClass(this.showClass);
            }
        });
    }
}
