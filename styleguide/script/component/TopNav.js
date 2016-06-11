/**
 * styleguide/script/component/TopNav
 * @author Keenan Staffieri
*/

class TopNav extends Component {

  constructor (selectorQuery, selectorQueryMobile) {
    super(selectorQuery)
    this.$mobileSelf = $(selectorQueryMobile)
    this.baseClass = 'sg-topnav'
    this.baseClassMobile = this.baseClass + '-mobile'
    this.scrollToThreshold = 50
    this.isAutoScrolling = false
    this.navLinkActiveClass = `${this.baseClass}__link--active`
    this.$navLink = this.$self.find(`.${this.baseClass}__link`)
    this.$navLinkMobile = this.$mobileSelf.find(`.${this.baseClassMobile}__link`)
    this.$burger = this.$mobileSelf.find(`.${this.baseClassMobile}__burger`)
    this.$close = this.$mobileSelf.find(`.${this.baseClassMobile}__close`)
    this.$mobileMenu = this.$mobileSelf.find(`.${this.baseClassMobile}__list`)
    this.sections = []

    this.gatherSections()
    this.initEvents()
    this.determineCurrentSection()
  }

  gatherSections () {
    this.$navLink.each( (index, target) => {
      let sectionRef = $(target).data('scroll-to')
      if (sectionRef !== undefined) {
        this.sections.push(sectionRef)
      }
    })
  }

  initEvents () {
    // Top nav scroll to click
    this.$navLink.on('click', (e) => {
      e.preventDefault()
      this.navItemSelected(e.target)
    })

    this.$navLinkMobile.on('click', (e) => {
      e.preventDefault()
      this.collapseMenu()
      this.navItemSelected(e.target)
    })

    this.$window.on('scroll.topNav', () => {
      if (this.isAutoScrolling) return false
      this.determineCurrentSection()
    })

    this.$burger.on('click', (e) => {
      e.preventDefault()
      this.expandMenu()
    })

    this.$close.on('click', (e) => {
      e.preventDefault()
      this.collapseMenu()
    })
  }

  navItemSelected (target) {
    const sectionId = $(target).data('scroll-to')
    this.setActiveItem(sectionId)
    this.scrollToSection(sectionId)
  }

  expandMenu () {
    this.$burger.css('display', 'none')
    this.$close.css('display', 'block')
    this.$mobileMenu.addClass(`${this.baseClassMobile}__list--expanded`)
  }

  collapseMenu () {
    this.$close.css('display', 'none')
    this.$burger.css('display', 'block')
    this.$mobileMenu.removeClass(`${this.baseClassMobile}__list--expanded`)
  }

  determineCurrentSection () {
    const scrollTop = this.$window.scrollTop()
    let activeFound = false
    for (let i = 0 i < this.sections.length i++) {
      const sectionId  = this.sections[i]
      const sectionPos = $('#' + sectionId).offset().top - this.scrollToThreshold
      if (scrollTop >= sectionPos) {
        this.setActiveItem(sectionId)
        activeFound = true
      }
    }

    if ( ! activeFound) {
      this.setActiveItem(this.sections[0])
    }
  }

  setActiveItem (sectionId) {
    this.$navLink.removeClass(this.navLinkActiveClass)
    this.$self.find(`.${this.baseClass}__link[data-scroll-to='${sectionId}']`).addClass(this.navLinkActiveClass)
  }

  scrollToSection (sectionId) {
    this.isAutoScrolling = true
    const scrollToPos = $('#' + sectionId).offset().top - this.scrollToThreshold
    $('html, body').animate({
      scrollTop: scrollToPos,
    },
    {
      duration: 1000,
      complete: () => {
        this.isAutoScrolling = false
      }
    })
  }
}
