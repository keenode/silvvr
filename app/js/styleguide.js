/**
 * styleguide.js
 * Styleguide main script.
*/

/**
    Mode Switcher
*/
class ModeSwitch {
    constructor(selectorQuery) {
        this.baseClass         = 'sg-mode-switch';
        this.$selector         = $(selectorQuery);
        this.optionActiveClass = `${this.baseClass}__option--active`;
        this.$option           = this.$selector.find(`.${this.baseClass}__option`);
        this.initEvents();
    }

    initEvents() {
        this.$option.on('click', (e) => {
            this.$option.removeClass(this.optionActiveClass);
            $(e.target).addClass(this.optionActiveClass);
        });
    }
}

var modeSwitch = new ModeSwitch('#sg-mode-switch');


/* Prism copy to clipbaord for all pre with copytoclipboard class */
$('pre.copytoclipboard').each(function () {
    var $this = $(this);
    var $button = $('<button>Copy</button>');
    $this.wrap('<div/>').removeClass('copytoclipboard');
    var $wrapper = $this.parent();
    $wrapper.addClass('copytoclipboard-wrapper').css({position: 'relative'})
    $button.css({position: 'absolute', top: 10, right: 10}).appendTo($wrapper).addClass('copytoclipboard btn btn-default');
    /* */
    var copyCode = new Clipboard('button.copytoclipboard', {
        target: function (trigger) {
            return trigger.previousElementSibling;
        }
    });
    copyCode.on('success', function (event) {
        event.clearSelection();
        event.trigger.textContent = 'Copied!';
        window.setTimeout(function () {
            event.trigger.textContent = 'Copy';
        }, 2000);
    });
    copyCode.on('error', function (event) {
        event.trigger.textContent = 'Press "Ctrl + C" to copy';
        window.setTimeout(function () {
            event.trigger.textContent = 'Copy';
        }, 2000);
    });
});
