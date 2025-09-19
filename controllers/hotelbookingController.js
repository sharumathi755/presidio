const HotelBooking = require('../models/hotelbooking');

// GET all hotel bookings
const getAllBookings = async (req, res, next) => {
    try {
        const bookings = await HotelBooking.find().populate('user_id'); // populate user data
        res.json(bookings);
    } catch (err) {
        next(err);
    }
};

// POST a new hotel booking
const createBooking = async (req, res, next) => {
    try {
        const booking = await HotelBooking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        next(err);
    }
};

// PUT/Update a booking by ID
const updateBooking = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await HotelBooking.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Booking not found' });
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

// DELETE a booking by ID
const deleteBooking = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await HotelBooking.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Booking not found' });
        res.json({ message: 'Booking deleted successfully', deleted });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllBookings,
    createBooking,
    updateBooking,
    deleteBooking
};
