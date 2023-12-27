const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    pickupTimeSlot: {
        type: String,  // e.g. "Before 12", "After 12", "Specific time"
        required: true
    },
    status: {
        type: String,  // e.g. "Scheduled", "Car Picked Up", "In Service", "Completed"
        default: "Scheduled"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    repairShop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RepairShop',
        required: true
    },
    // Add any other appointment-specific fields here,any special instructions from the user
});

module.exports = mongoose.model('Appointment', appointmentSchema);
