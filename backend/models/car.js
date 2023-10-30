const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // Add any other car-specific fields here
});

module.exports = mongoose.model('Car', carSchema);
