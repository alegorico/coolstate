// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
	$.fn.extend({
		coolState: function() {
			var arg = arguments;
			if(arg[1] != undefined) {
				this.each(function(e,r) {
					$(r).attr("data-" + arg[0], arg[1]);
				});

				return this;
				
			} else if(arg[0] != undefined) {
				var a = [];
				this.each(function(e,r) {
					a[e] = $(r).attr("data-" + arg[0]);
				});

				return (a == [] || a[0] == undefined) ? undefined : a;
			}
		}
	});
}));
