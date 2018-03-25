const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  }

});

module.exports = mongoose.model('Categories', categoriesSchema);
