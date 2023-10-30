const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: Date,
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    repairShop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RepairShop'
    },
    // Add any other appointment-specific fields here
});

module.exports = mongoose.model('Appointment', appointmentSchema);
