'use strict';

var Gallery = {
	init: function () {
		$('.gallery-image').on('click', function () {
			$(this).toggleClass('fullScreenImage');
		});
	}
};


module.exports = Gallery;