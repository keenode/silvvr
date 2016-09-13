/**
 * buildsys/scaffolding/PageCollection
 * Page collection operations class.
 * @author Keenan Staffieri
 */

import pages from '../data/pages'

class PageCollection {

  constructor (components) {
    this.pages = pages
  }

  getPageByReference (ref) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].ref === ref) {
        return this.pages[i]
      }
    }
    return null
  }
}

export default new PageCollection(pages)
