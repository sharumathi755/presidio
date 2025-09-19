const express  = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./config/db_config.js');

// Import route files
const userRoutes = require('./routes/users.js');
const hotelRoutes = require('./routes/hotelbooking.js'); // ✅ this one

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/hotelbooking', hotelRoutes); // ✅ correctly mounts /api/hotelbooking

// Test route
app.get('/sample', (req, res) => {
    res.send("hello from exp");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
