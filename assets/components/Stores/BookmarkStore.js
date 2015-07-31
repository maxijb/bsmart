var _ = require('lodash');
var pubsub = require('../Utils/PubSub');



var Store = (function() {

	//main data store for this class
	var storeData = {
		bookmarks: []
	}


	pubsub.on("ACTION:create-bookmark", function(data, callback) {
		console.log(data);
	    // ///TODO: user should come from the cookie in server side
	    $.post('/resource/create', data, function(response) {
	        //parent create
	        console.log(response);
	        storeData.bookmarks.push(response);
	        //conditional callback
	        exec(callback, Array.prototype.slice.call(arguments));
	    });
	});



	// Exceute conditional callbacks
	function exec(cb, args) {
		if (typeof cb == "function") {
			cb.apply(null, args);
		}
	}

	
})();




 
module.exports = Store;