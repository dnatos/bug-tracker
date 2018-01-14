var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	}
});


module.exports = mongoose.model("Categories", categoriesSchema);