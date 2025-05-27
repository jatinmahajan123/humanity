# Email Setup Instructions

To enable email functionality for the contact form, you need to set up Gmail credentials.

## Steps to Set Up Gmail for Sending Emails

1. **Create a `.env` file in the `server` directory** with the following content:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/humanity-founders

# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000

# JWT Secret (for future authentication features)
JWT_SECRET=your-jwt-secret-key-here
```

2. **Set up Gmail App Password**:
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification (enable if not already enabled)
   - Go to Security → App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password in the `EMAIL_PASS` field

3. **Update the `.env` file**:
   - Replace `your-gmail-address@gmail.com` with your actual Gmail address
   - Replace `your-app-password` with the 16-character app password you generated
   - Replace `your-jwt-secret-key-here` with a secure random string

## How to Run

1. **Start the backend server**:
   ```bash
   cd server
   npm install
   npm run dev
   ```

2. **Start the frontend** (in a new terminal):
   ```bash
   npm start
   ```

3. **Test the contact form**:
   - Go to the contact section on your website
   - Fill out the form
   - Click "Send Message"
   - The email should be sent to `jatinmahajan1713@gmail.com`

## Email Template

The email will include:
- Name of the person who submitted the form
- Their email address
- Interest area they selected
- Their message
- Timestamp of submission

## Troubleshooting

- Make sure MongoDB is running locally
- Check that port 5000 is not being used by another application
- Verify your Gmail credentials are correct
- Check the server console for any error messages 