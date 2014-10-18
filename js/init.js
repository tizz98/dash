// global stuff
data = {
	temp: 'f',
	time: '24',
	stocks: ['AAPL','MSFT','NFLX','YHOO'],
	modOrder: ['date', 'clock', 'weather', 'news', 'stocks'],
}

function sendData(data) {
	var url = 'https://dash.zumh.org/d/new';
	getModOrder();
	var post_data = JSON.stringify(data);

	console.log(post_data);

	// $.ajax({
	//   type: "POST",
	//   url: url,
	//   data: data,
	//   success: function() {
	//   	console.log('success');
	//   },
	// });
}