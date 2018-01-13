var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
	category: {
		type: String,
		unique: true
	}
});


module.exports = mongoose.model("Categories", categoriesSchema);