var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
	product_name: String,
	product_type: String
});

module.exports = mongoose.model("Product", productSchema);