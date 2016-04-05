/**
 * components/TopNav
 * @author Keenan Staffieri
*/

class TopNav extends Component {

    constructor(selectorQuery) {
        super(selectorQuery);
        this.baseClass          = 'sg-topnav';
        this.scrollToThreshold  = 50;
        this.isAutoScrolling    = false;
        this.navLinkActiveClass = `${this.baseClass}__link--active`;
        this.$navLink           = this.$self.find(`.${this.baseClass}__link`);
        this.sections           = [];
        this.generateMobileMarkup();
        this.gatherSections();
        this.initEvents();
        this.determineCurrentSection();
    }

    generateMobileMarkup() {

        var markup = `<nav class="${this.baseClass}-mobile">`;

        this.$navLink.each( (index, target) => {
            var sectionRef  = $(target).data('scroll-to'),
                navItemText = $(target).text();
            console.log('sectionRef: ' + sectionRef);
            console.log('navItemText: ' + navItemText);
        });

        markup += '</nav>';

        this.$self.append(markup);
    }

    gatherSections() {
        this.$navLink.each( (index, target) => {
            var sectionRef = $(target).data('scroll-to');
            if(sectionRef !== undefined) {
                this.sections.push(sectionRef);
            }
        });
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
            if (this.isAutoScrolling) return false;
            this.determineCurrentSection();
        });
    }

    determineCurrentSection() {
        var scrollTop   = this.$window.scrollTop(),
            activeFound = false;
        for (let i = 0; i < this.sections.length; i++) {
            var sectionId  = this.sections[i],
                sectionPos = $('#' + sectionId).offset().top - this.scrollToThreshold;
            if (scrollTop >= sectionPos) {
                this.setActiveItem(sectionId);
                activeFound = true;
            }
        }

        if ( ! activeFound) {
            this.setActiveItem(this.sections[0]);
        }
    }

    setActiveItem(sectionId) {
        this.$navLink.removeClass(this.navLinkActiveClass);
        this.$self.find(`.${this.baseClass}__link[data-scroll-to='${sectionId}']`).addClass(this.navLinkActiveClass);
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
