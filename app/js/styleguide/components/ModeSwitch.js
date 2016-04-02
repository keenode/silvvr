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
        this.setInitalMode();
        this.initEvents();
    }

    setInitalMode() {
        var mode = localStorage.getItem('styleguide_mode');
        if (mode) {
            // Set option based on local storage value
            this.$selector.find(`.${this.baseClass}__option[data-value='${mode}']`).addClass(this.optionActiveClass);
            this.selectOption(mode);
        }
        else {
            // Default to first option
            this.$option.first().addClass(this.optionActiveClass);
        }
    }

    initEvents() {
        this.$option.on('click', (e) => {
            var $selectedOption = $(e.target),
                selectedValue   = $selectedOption.data('value');
            this.$option.removeClass(this.optionActiveClass);
            $selectedOption.addClass(this.optionActiveClass);
            this.selectOption(selectedValue);
        });
    }

    selectOption(value) {
        switch (value) {
            case 'developer':
                $('.sg-example-code').css('display', 'block');
                localStorage.setItem('styleguide_mode', 'developer');
                break;
            case 'designer':
                $('.sg-example-code').css('display', 'none');
                localStorage.setItem('styleguide_mode', 'designer');
                break;
        }
    }
}
