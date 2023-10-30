const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    registrationPlate: {
        type: String,
        required: true,
        unique: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Add any other car-specific fields as needed
});

module.exports = mongoose.model('Car', carSchema);
