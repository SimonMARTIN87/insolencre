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
