const mongoose = require('mongoose');

const stocksSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  quantite: { type: Number, required: true },
  emplacement: { type: String, required: true }
});

module.exports = mongoose.model('Stocks', stocksSchema);