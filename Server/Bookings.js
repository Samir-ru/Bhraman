//Bookings.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/Bhraman', { useNewUrlParser: true, useUnifiedTopology: true });

const contentSchema = new Schema({
    vehicle: String,
    date: String,
    from: String, 
    to: String,
});

const Booking = mongoose.model('Booking', contentSchema);

module.exports = Booking;
