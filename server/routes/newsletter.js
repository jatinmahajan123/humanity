const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validator = require('validator');
const nodemailer = require('nodemailer');

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Newsletter schema
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed'],
    default: 'active',
  },
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email format
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    let savedSubscriber = null;
    let alreadyExists = false;

    // Try to save to database if MongoDB is available
    try {
      // Check if email already exists
      const existingSubscriber = await Newsletter.findOne({ email });
      if (existingSubscriber) {
        alreadyExists = true;
      } else {
        const subscriber = new Newsletter({ email });
        savedSubscriber = await subscriber.save();
      }
    } catch (dbError) {
      console.log('Database operation failed, but continuing with email notification:', dbError.message);
    }

    // If email already exists in database, return early
    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: 'Email already subscribed',
      });
    }

    // Send email notification about new subscription (works even without database)
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'jatinmahajan1713@gmail.com',
        subject: 'New Newsletter Subscription',
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Database Status:</strong> ${savedSubscriber ? 'Saved to database' : 'Email-only (database unavailable)'}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log('Email notification failed:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: savedSubscriber,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Error subscribing to newsletter',
      error: error.message,
    });
  }
});

module.exports = router;
