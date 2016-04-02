/**
 * components/TopNav
*/

class TopNav extends Component {

    constructor(selectorQuery) {
        super(selectorQuery);
        this.baseClass = 'sg-topnav';
        this.scrollToThreshold = 50;
        this.isAutoScrolling = false;
        this.navLinkActiveClass = `${this.baseClass}__link--active`;
        this.$navLink = this.$selector.find(`.${this.baseClass}__link`);
        this.sections = [];
        this.gatherSections();
        this.initEvents();
    }

    gatherSections() {
        this.$navLink.each( (index, target) => {
            var sectionRef = $(target).data('scroll-to');
            if(sectionRef !== undefined) {
                this.sections.push(sectionRef);
            }
        });
        console.log(this.sections);
    }

    initEvents() {
        // Top nav scroll to click
        this.$navLink.on('click', (e) => {
            e.preventDefault();
            var sectionId = $(e.target).data('scroll-to');
            this.setActiveItem(sectionId);
            this.scrollToSection(sectionId);
        });

        this.$window.on('scroll.topNav', () => {
            var scrollTop = this.$window.scrollTop();
            // console.log('scrollTop: ' + scrollTop);

            if (this.isAutoScrolling) return false;

            for (let i = 0; i < this.sections.length; i++) {
                var sectionId  = this.sections[i],
                    sectionPos = $('#' + sectionId).offset().top - this.scrollToThreshold;
                if (scrollTop >= sectionPos) {
                    this.setActiveItem(sectionId);
                }
            }
        });
    }

    setActiveItem(sectionId) {
        this.$navLink.removeClass(this.navLinkActiveClass);
        this.$selector.find(`.${this.baseClass}__link[data-scroll-to='${sectionId}']`).addClass(this.navLinkActiveClass);
    }

    scrollToSection(sectionId) {
        this.isAutoScrolling = true;
        var scrollToPos = $('#' + sectionId).offset().top - this.scrollToThreshold;
        $('html, body').animate({
            scrollTop: scrollToPos,
        }, 
        {
            duration: 1000,
            complete: () => {
                this.isAutoScrolling = false;
            }
        });
    }
}
