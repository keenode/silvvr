/**
 * js/styleguide/styleguide
 * Styleguide main script.
 * @author Keenan Staffieri
*/

$(document).ready(function () {

    // Init top navigation for DESKTOP
    var topNav = new TopNav('#sg-topnav', '#sg-topnav-mobile');

    // Init mode switch for Developer / Designer (Desktop / Mobile)
    var modeSwitch = new ModeSwitch('#sg-mode-switch');

    // Init back to top component
    var backToTop = new BackToTop('#sg-backtotop');

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

});
