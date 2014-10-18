function setTime(hours) {
	updateClock(hours);
}

function changeStocks() {
	$('#stocks_modal').modal('show');
}

window.onload = function () {
	$('.s_edit').click(function(event){

		if ($(this).hasClass('fa-pencil')) {
			// edit
			$(this).removeClass('fa-pencil');
			$(this).addClass('fa-save');
			var elem = $(this).closest('.portlet').children('h3')[0];

			var text = elem.innerHTML;
			console.log(text);

			$(elem).replaceWith("<input type='edit' value='" + text + "'>");

		} else {
			// save
			$(this).removeClass('fa-save');
			$(this).addClass('fa-pencil');
			var elem = $(this).closest('.portlet').children('input')[0];

			var text = $(elem).val();

			$(elem).replaceWith('<h3 class="portlet-content stock_name">' + text + '</h3>');
		}
	});
}