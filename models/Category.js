var mongoose = require('mongoose');

var PositionSchema = new mongoose.Schema({
	id: Number,
	title: String,
	cost: Number,
	desc: String,
	weight: String,
	img: String,
	count: { type: Number, default: 1 },
	status: { type: Boolean, default: true }
});

var CategorySchema = new mongoose.Schema({
	id: Number,
  title: String,
  state: { type: String, default: 'inactive'},
  positions: [PositionSchema]
  // updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema, 'category');
