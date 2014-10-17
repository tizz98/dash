/* where stocks is an array of stocks */
function getStocks(stocks) {
	var base_url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=';
	var my_data = [];

	for (var i = 0; i < 4; i++) {
		var id = 's_' + i;
		var symbol = stocks[i];
		var url = base_url + symbol + '&callback=?';

		request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400){
		    // Success!
		    data = JSON.parse(request.responseText);
		    console.log('success');
		  } else {
		    // We reached our target server, but it returned an error
		    console.log('reached server, but error');
		  }
		};

		request.onerror = function() {
		  // There was a connection error of some sort
		  console.log('connection error');
		};

		request.send();

		console.log(my_data);
	};

	console.log(my_data);
}

function setData(id, title, price, percent){
	id = '#' + id;
	var my_title = document.querySelector(id + ' .title');
	console.log(my_title);
	var my_price = document.querySelector(id + ' .price');
	var my_percent = document.querySelector(id + ' .percent');

	var icon = '<i class="fa fa-fw';
	percent = percent.toString().substr(0,7)

	if (parseInt(percent) < 0) {
		icon += ' fa-arrow-down red';
		percent = percent.substr(0,4);
	} else if (parseInt(percent) > 0) {
		icon += ' fa-arrow-up green';
		percent = percent.substr(0,3);
	} else {
		icon += ' fa-ellipsis-h';
		percent = '0.00';
	}
	icon += '"></i>';
	icon += ' ' + percent + '%';

	price = price.toString();

	if (price.indexOf('.') === -1) {
		price += '.00';
	} else {
		split = price.split('.');

		if (split[1].length < 2) {
			split[1] += '0';
		}

		price = split[0] + '.' + split[1];
	}

	my_title = title;
	my_price = price;
	my_percent = icon;
}

var stocks = ['AAPL', 'NFLX', 'FB', 'GOOGL'];
getStocks(stocks);