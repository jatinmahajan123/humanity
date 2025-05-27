# Humanity Founders Website

A modern, responsive MERN stack website for Humanity Founders - empowering humanity through innovation, technology, and sustainable solutions.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact System**: Functional contact form with email notifications
- **Newsletter Subscription**: Email subscription functionality
- **Team Showcase**: Dynamic team member profiles
- **Service Portfolio**: Comprehensive services display
- **Performance Optimized**: Fast loading with optimized components

## Tech Stack

### Frontend
- React 18
- Material-UI (MUI)
- Framer Motion (animations)
- React Router
- Styled Components

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (email functionality)
- JWT Authentication
- Rate Limiting & Security

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Frontend Setup
```bash
# Clone the repository
git clone <repository-url>
cd humanity-founders

# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file and add your environment variables
cp .env.example .env

# Start server
npm run dev
```

### Environment Variables
Create a `.env` file in the server directory:

```env
MONGODB_URI=mongodb://localhost:27017/humanity-founders
JWT_SECRET=your-super-secret-jwt-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
NODE_ENV=development
```

## Project Structure 