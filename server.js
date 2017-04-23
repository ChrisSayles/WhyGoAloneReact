// Dependencies
var express = require("express");
var mongoose = require("mongoose");

mongoose.Promise = Promise;
mongoose.connect("mongodb://bigmongo:d33znutz@ds155160.mlab.com:55160/whygoalone2");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

//initialize express app
var app = express();

//body-parser boilerplate
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up an Express Router
var router = express.Router();

// Require routes file pass router object
require("./config/express_routes")(router);

app.use(router);

//requiring models
var Message = require("./models/Message.js");

//declare port
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
    app.listen(port, function() {
	  console.log("App running on port " + port + "!");
	});
});