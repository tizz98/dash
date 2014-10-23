 /*
	$('#sb').each(function(){ ... })
	~ detects when the value inside the search bar
	~ changes and then does a function
*/
 $('#sb').each(function() {
   var elem = $(this);
   var results_div = document.getElementById('stock_results');

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());       
       
	    function(){
	    	results_div.innerHTML = "";
	    	$.getJSON("/stocks.json", {
				q: elem.val(),
			}, function(data) {
				console.log(data);
			}); // end function with data

     }
   });
 });