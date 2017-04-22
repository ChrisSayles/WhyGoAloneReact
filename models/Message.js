var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var MessageSchema = new Schema({
  // title is a required string
  body: {
    type: String,
    required: true
  },

  date: String,

});

// Create the Message model with the MessageSchema
var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;