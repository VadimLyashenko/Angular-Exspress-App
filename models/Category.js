var mongoose = require('mongoose');

var PositionSchema = new mongoose.Schema({
	title: String,
	cost: String,
	desc: String,
	weight: String,
	img: String
});

var CategorySchema = new mongoose.Schema({
  title: String,
  positions: [PositionSchema],
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema);
