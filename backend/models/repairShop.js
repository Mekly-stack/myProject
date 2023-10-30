const mongoose = require('mongoose');

const repairShopSchema = new mongoose.Schema({
    name: String,
    location: String,
    // Add any other shop-specific fields here
});

module.exports = mongoose.model('RepairShop', repairShopSchema);
