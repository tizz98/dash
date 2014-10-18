function setTime(hours) {
	updateClock(hours);
}

function changeStocks() {
	$('#stocks_modal').modal('show');
}

// make stocks editable
window.onload = function () {
	$('.s_edit').click(function(event){

		if ($(this).hasClass('fa-pencil')) {
			// edit
			$(this).removeClass('fa-pencil');
			$(this).addClass('fa-save');
			var elem = $(this).closest('.portlet').children('h3')[0];

			var text = elem.innerHTML;
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

function saveStocks() {
	var elems = document.querySelectorAll('.column2 .portlet h3')
	var stocks = [];

	for (var i = 0; i < 4; i++) {
		stocks.push(elems[i].innerHTML);
	}

	data['stocks'] = stocks;
	sendData(data);
}

function resetStocks() {
	var stocks = data['stocks'];
	var elems = document.querySelectorAll('.column2 .portlet');

	for (var i = 0; i < 4; i++) {
		var elem = elems[i].children[1];
		var text = data['stocks'][i];
		$(elem).replaceWith('<h3 class="portlet-content stock_name">' + text + '</h3>');
	};
}

function getModOrder() {
	var elems = document.querySelectorAll('.column .portlet .mod');
	var modOrder = [];

	for (var i = 0; i < elems.length; i++) {
		modOrder.push(elems[i].id);
	};

	data['modOrder'] = modOrder;
}