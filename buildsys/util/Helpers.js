/**
 * buildsys/utils/Helpers
 * Helper utility functions.
 * @author Keenan Staffieri
*/

class Helpers {

  /**
    Format string: Uppercase letters between spaces and dashes '-'
  */
  static ucBetweenDashSpace (text) {
    return text.replace(/\w\S*/g, function (text) {
      if (text.indexOf('-') != -1) {
        var formattedText = ''
        var splitText = text.split('-')
        for (var i = 0; i < splitText.length; i++) {
            if (i === 0) { formattedText += splitText[i].charAt(0).toUpperCase() + splitText[i].substr(1) }
            else        { formattedText += '-' + splitText[i].charAt(0).toUpperCase() + splitText[i].substr(1) }
        }
        return formattedText
      }
      else {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
      }
    })
  }

  /**
    Format Filename: Ensure that filenames for TypeScript files obey the format
    MyComponent.ts instead of my-component.ts
  */
  static makeScriptName (text) {
    if (text.indexOf('-') != -1) {
      var formattedText = ''
      var splitText = text.split('-')
      for (var i = 0; i < splitText.length; i++) {
        formattedText += splitText[i].charAt(0).toUpperCase() + splitText[i].substr(1)
      }
      return formattedText
    }
    else {
      return formattedText.charAt(0).toUpperCase() + splitText[i].substr(1)
    }
  }

  /**
    @param array - Array of items
    @return Array with duplicate items removed
  */
  static uniqueItemsOnly (array) {
    var a = []
    for (var i = 0; i < array.length; i++ ) {
      var current = array[i]
      if (a.indexOf(current) < 0) a.push(current)
    }
    return a
  }
}

module.exports = Helpers
