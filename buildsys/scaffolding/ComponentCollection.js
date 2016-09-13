/**
 * buildsys/scaffolding/ComponentCollection
 * Component collection operations class.
 * @author Keenan Staffieri
 */

import components from '../data/components'

class ComponentCollection {

  constructor (components) {
    this.components = components
  }

  getComponentByReference (ref) {
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i].ref === ref) {
        return this.components[i]
      }
    }
    return null
  }

  getComponentByName (name) {
    for (let i = 0; i < this.components.length; i++) {
        if (this.components[i].name === name) {
          return this.components[i]
        }
    }
    return null
  }
}

export default new ComponentCollection(components)
