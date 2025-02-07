const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so GitHub Pages can access this backend
app.use(cors());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to check if the backend is running
app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
