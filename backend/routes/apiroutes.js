const express = require('express');
const router = express.Router();
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

// Geocode route
router.get('/geocode', async (req, res) => {
    const { address } = req.query;
    if (!address) {
        return res.status(400).send('Address parameter is required.');
    }

    try {
        const response = await client.geocode({
            params: {
                address: address,
                key: process.env.GOOGLE_MAPS_API_KEY,
            },
            timeout: 1000 // milliseconds
        });
        res.json(response.data.results);
    } catch (e) {
        console.error(e.response.data.error_message);
        res.status(500).send(e.response.data.error_message);
    }
});

module.exports = router;


