const mongoose = require('mongoose');

const repairShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    availableDays: {
        type: [String], // ["Monday", "Tuesday", "Wednesday", ...]
        required: true
    },
    openingTime: {
        type: String, // Represented as "HH:mm"
        required: true
    },
    closingTime: {
        type: String, // Represented as "HH:mm"
        required: true
    },
    supportedCars: {
        type: [String], // List of car makes or models they support
        required: true
    },
    // You can add more fields later as your app evolves
});

module.exports = mongoose.model('RepairShop', repairShopSchema);
