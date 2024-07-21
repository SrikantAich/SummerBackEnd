require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');
const hospitalRoutes = require('./routes/hospitalRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
   origin: 'http://localhost:3000', // Allow requests from any origin
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());

// Routes
app.use('/api/v1/hospitals', hospitalRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
