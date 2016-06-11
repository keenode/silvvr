/**
 * buildsys/scaffolding/ComponentCollection
 * Component collection operations class.
 * @author Keenan Staffieri
*/

import components from '../components'

class ComponentCollection {

  constructor (components) {
    this.components = components
  }

  getComponentByReference (ref) {
    for (var i = 0; i < this.components.length; i++) {
      if (this.components[i].ref === ref) {
        return this.components[i]
      }
    }
    return null
  }

  getComponentByName (name) {
    for (var i = 0; i < this.components.length; i++) {
        if (this.components[i].name === name) {
          return this.components[i]
        }
    }
    return null
  }
}

module.exports = new ComponentCollection(components)
