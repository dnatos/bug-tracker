const mongoose = require('mongoose');

const issuesSchema = new mongoose.Schema({
  version: String,
  description: {
    title: String,
    description: { type: String, trim: true },
    state: String
  }

});

module.exports = mongoose.model('Issues', issuesSchema);
