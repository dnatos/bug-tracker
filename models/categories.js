var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
	category: String
});


module.exports = mongoose.model("Categories", categoriesSchema);