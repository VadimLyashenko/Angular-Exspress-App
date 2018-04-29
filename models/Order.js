var mongoose = require('mongoose');

var CartPositionSchema = new mongoose.Schema({
	id: Number,
	img: String,
	title: String,
	cost: Number,
	count: Number
});

var OrderSchema = new mongoose.Schema({
  title: String,
  tel: String,
  address: String,
  allcost: Number,
  status: { type: String, default: 'open' },
  cart_positions: [CartPositionSchema]
});

module.exports = mongoose.model('Order', OrderSchema, 'orders');