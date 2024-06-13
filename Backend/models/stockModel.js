const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  change: { type: Number, required: true },
  volume: { type: Number, required: true },
});

const Stock = mongoose.model('Stock', StockSchema);
module.exports = Stock;