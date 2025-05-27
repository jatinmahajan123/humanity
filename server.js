const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Trust proxy setting (for rate limiting)
app.set('trust proxy', 1);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/newsletter', require('./routes/newsletter'));
// app.use('/api/team', require('./routes/team')); // TODO: Create team route
// app.use('/api/services', require('./routes/services')); // TODO: Create services route

// MongoDB connection (MongoDB Atlas)
const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://jatinmahajan1713:jatinmahajan11@humanity.zin1aa5.mongodb.net/humanity-founders?retryWrites=true&w=majority';

mongoose
  .connect(mongoUri)
  .then(() => console.log('MongoDB Atlas connected successfully'))
  .catch((err) => {
    console.log('MongoDB connection error:', err.message);
    console.log('Running without MongoDB - emails will still work');
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 