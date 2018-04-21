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