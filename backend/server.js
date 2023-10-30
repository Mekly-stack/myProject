const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Handle MongoDB connection success and error
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
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
