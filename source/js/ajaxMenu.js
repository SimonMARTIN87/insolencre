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