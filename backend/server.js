require('dotenv').config();
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const apiRoutes = require('./routes/apiroutes');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', apiRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle MongoDB connection success and error
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});
mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
});

// Serve static files from the "frontend" directory
app.use('/', express.static(path.join(__dirname, '../public/frontend/Logis')));

// Sample API endpoint (you can replace this with your actual API routes)
app.get('/api/sample', (req, res) => {
    res.json({ message: 'Sample API endpoint' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
