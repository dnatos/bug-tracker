var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
	name: String,
	type: String,
	description: String,
	issue: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Issues"
	}]
});

module.exports = mongoose.model("Product", productSchema);