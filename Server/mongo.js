// mongo.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/Bhraman', { useNewUrlParser: true, useUnifiedTopology: true });

const contentSchema = new Schema({
  title: String,
  description: String,
  imageData: String,
  numerator: { type: Number, default: 0 },
  denominator: { type: Number, default: 0 }
});

const Image = mongoose.model('Image', contentSchema);

module.exports = Image;
