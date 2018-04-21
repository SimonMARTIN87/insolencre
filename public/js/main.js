(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var AjaxMenu = {
	init: function (gallery) {
		$('a').on('click', function (e) {
			e.preventDefault();
			$('.menu-open').prop('checked', false);
			var url = $(this).attr('href');
			if (url === '/') {
				$('#ajaxContainer').html('');
				return false;
			}
			$.ajax({
				url: url,
				method: 'GET',
				success: function (xhr) {
					$('#ajaxContainer').html(xhr);
					if (url === '/gallery') {
						gallery.init();
					}
				},
				error: function (err) {
					console.log(err);
					toastr.error(err);
				}
			});
			return false;
		});
	}
};


module.exports = AjaxMenu;
},{}],2:[function(require,module,exports){
'use strict';

var Banner = {
	init: function () {
		$('.banner-wrapper').css('transform', 'scaleY(1)')
			.css('-webkit-transform', 'scaleY(1)');
	}
};


module.exports = Banner;
},{}],3:[function(require,module,exports){
'use strict';

var Gallery = {
	init: function () {
		$('.gallery-image').on('click', function () {
			$(this).toggleClass('fullScreenImage');
		});
	}
};


module.exports = Gallery;
},{}],4:[function(require,module,exports){
'use strict';

var banner = require('./banner');
var pictopop = require('./pictopop');
var ajaxMenu = require('./ajaxMenu');

var gallery = require('./gallery');

var start = function () {
	banner.init();
	pictopop.init(8, pictopop.popIn );
	ajaxMenu.init(gallery);
};


$(document).ready(function () {
	start();
});
},{"./ajaxMenu":1,"./banner":2,"./gallery":3,"./pictopop":5}],5:[function(require,module,exports){
'use strict';

var PictoPop = {
	listPictos: [],
	init: function (nbPop = 5, callback) {
		for (var i=0; i<nbPop; i++) {
			var picto = $('<div>');
			picto.addClass('picto');
			picto.addClass('picto-'+(i%6 + 1));
			var top = Math.random() * 90;
			var left = Math.random() * 95;
			var size = Math.random()*50 + 50;

			var stl = 'top:'+top+'%; left:'+left+'%;width:'+size+'px;height:'+size+'px';

			picto.attr('style',stl);
			
			$('body').append(picto);
			PictoPop.listPictos.push(picto);
		}

		if (callback) {
			callback();
		}
	},

	popIn: function (delay = 2000) {
		for (var i=0; i<PictoPop.listPictos.length; i++) {
			PictoPop.listPictos[i].delay(delay*Math.random()).queue(function (next) {
				$(this).addClass('pop');
				next();
			});
		}
	}
};


module.exports = PictoPop;

},{}]},{},[4]);
