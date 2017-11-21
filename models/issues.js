var mongoose = require("mongoose");

var issuesSchema = new mongoose.Schema({
	title: String,
	description: String,
	state: String
});

module.exports = mongoose.model("Issues", issuesSchema);