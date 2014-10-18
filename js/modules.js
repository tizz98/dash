function setTime(hours) {
	updateClock(hours);
}

function changeStocks() {
	$('#stocks_modal').modal('show');
}

window.onload = function () {
	$('.s_edit').click(function(event){
		if ($(this).hasClass('fa-pencil')) {
			$(this).removeClass('fa-pencil');
			$(this).addClass('fa-save');
		} else {
			$(this).removeClass('fa-save');
			$(this).addClass('fa-pencil');
		}
	});
}