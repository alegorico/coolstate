(function (factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof module === 'object' && module.exports) { module.exports = function( root, jQuery ) { if ( jQuery === undefined ) { if ( typeof window !== 'undefined' ) { jQuery = require('jquery'); } else { jQuery = require('jquery')(root); } } factory(jQuery); return jQuery; }; } else { factory(jQuery); } }(function ($) {
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


void function($){
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
}(jQuery)
