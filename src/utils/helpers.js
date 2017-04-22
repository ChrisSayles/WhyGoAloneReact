import 'whatwg-fetch';

var helper = {
	createMessage: function(message){
		var body = JSON.stringify({message: message});

		var myInit = {
			method: "POST",
			headers: {
        		'Accept': 'application/json',
        		'Content-Type': 'application/json'
      		},
			body: body
		}

		var messagePostRequest = new Request("/newMessage", myInit);
		
		return new Promise(function(resolve, reject){

			fetch(messagePostRequest)
				.then(response => response.json())
				.then((responseData) => { 
					console.log("responseData: " + responseData);
					resolve(responseData);
				})
				.catch(err => console.log(err));

		});
	},

	fetchMessages: function(){
		return new Promise(function(resolve, reject){
			fetch('/lastTwentyMessages')
				.then(response => response.json())
				.then((responseData) => { 
					console.log("responseData: " + responseData);
					resolve(responseData);
				})
				.catch(err => console.log(err));
		});
	}
}

module.exports = helper;