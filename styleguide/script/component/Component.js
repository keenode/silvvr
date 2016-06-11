/**
 * styleguide/script/component/Component
 * Component base class.
 * @author Keenan Staffieri
*/

class Component {
  constructor (selectorQuery) {
    this.baseClass = 'sg-component'
    this.$self = $(selectorQuery)
    this.$window = $(window)
  }

  findElement (elementName) {
    return this.$self.find(`.${this.baseClass}__${elementName}`)
  }

  addModifier (modifierName) {
    this.$self.addClass(`${this.baseClass}--${modifierName}`)
  }

  removeModifier (modifierName) {
    this.$self.removeClass(`${this.baseClass}--${modifierName}`)
  }

  addModifierToElement ($element, modifierName) {
    var className = $element.attr('class').split(' ')[0]
    $element.addClass(`${className}--${modifierName}`)
  }

  removeModifierFromElement ($element, modifierName) {
    var className = $element.attr('class').split(' ')[0]
    $element.removeClass(`${className}--${modifierName}`)
  }

  hasModifier (modifierName) {
    return this.$self.hasClass(`${this.baseClass}--${modifierName}`)
  }

  elementHasModifier ($element, modifierName) {
    var className = $element.attr('class').split(' ')[0]
    return $element.hasClass(`${className}--${modifierName}`)
  }
}
