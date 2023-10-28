const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
