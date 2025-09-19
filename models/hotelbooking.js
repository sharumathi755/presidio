// models/hotelbooking.js

const mongoose = require('mongoose');

const hotelbookingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
    hotel_name: { type: String, required: true },
    check_in: { type: Date, required: true },
    check_out: { type: Date, required: true },
    room_type: { type: String, enum: ['Single', 'Double', 'Suite', 'Deluxe'], required: true },
    total_price: { type: Number, required: true },
    status: { type: String, enum: ['Booked', 'Cancelled', 'Completed'], default: 'Booked' },
    booking_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HotelBooking', hotelbookingSchema);
