const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: { // Make sure to hash this in real applications
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // Add any other user-specific fields here
});

module.exports = mongoose.model('User', userSchema);
