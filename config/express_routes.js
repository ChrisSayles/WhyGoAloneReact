var path = require("path");
var makeDate = require("../scripts/date");
var Message = require("../models/Message");

module.exports = function(router) {
    router.all("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "../index.html"));
    });

    router.post("/newMessage", function(req, res){
    	Message.create({
   			body: req.body.message, 
    		date: makeDate()

  		},  function(err) {

		    if (err) {
		      console.log("Error: " + err);
		    }
		    else {
		      console.log("Success");
		      res.send("Saved Message");
		    }
		});
    });

    router.get("/lastTwentyMessages", function(req, res){

    	function(cb)
	    	Message.find()
	    		.sort({_id:-1})
	    		.limit(20)
	    		.exec(function(err, doc) {
			        res.send(doc);
	      		});
	    }

    });
}