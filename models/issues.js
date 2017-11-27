var mongoose = require("mongoose");

var issuesSchema = new mongoose.Schema({
	title: String,
	description: {type:String, trim: true},
	state: String
});

module.exports = mongoose.model("Issues", issuesSchema);