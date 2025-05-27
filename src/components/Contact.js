import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestArea: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setShowAlert(true);
        setFormData({
          name: '',
          email: '',
          interestArea: '',
          message: '',
        });
        setTimeout(() => setShowAlert(false), 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error alert here
      alert('Failed to send message. Please try again.');
    }
  };

  const interestAreas = [
    'Technology Development',
    'Business Innovation',
    'Social Impact',
    'Research & Development',
    'Partnership',
    'Investment',
    'Other'
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        mx: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, #9fbc8f 0%, #7ba05b 100%)',
        borderRadius: '20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0} alignItems="center" sx={{ minHeight: '80vh' }}>
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ pr: { md: 8 }, mb: { xs: 6, md: 0 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#2d3748',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Want to Collaborate or Contribute?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#4a5568',
                    mb: 6,
                    fontSize: '1.2rem',
                    fontWeight: 400,
                  }}
                >
                  Let's build something meaningful together.
                </Typography>
                
                {/* Geometric Shapes */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  {/* Browser Window */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '280px',
                      height: '180px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '12px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#ff5f56',
                        boxShadow: '20px 0 0 #ffbd2e, 40px 0 0 #27ca3f',
                      },
                    }}
                  />
                  
                  {/* Geometric Shapes */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50px',
                      right: '20px',
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '12px',
                      transform: 'rotate(15deg)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50px',
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      borderRadius: '50%',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '40px',
                      right: '40px',
                      width: '100px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '20px',
                      transform: 'rotate(-10deg)',
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  p: { xs: 4, md: 6 },
                  mx: { xs: 2, md: 4 },
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <form onSubmit={handleSubmit}>
                  {showAlert && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Alert
                        severity="success"
                        sx={{
                          mb: 4,
                          backgroundColor: '#d4edda',
                          border: '2px solid #28a745',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          fontWeight: 600,
                          '& .MuiAlert-icon': {
                            color: '#28a745',
                            fontSize: '1.5rem',
                          },
                          '& .MuiAlert-message': {
                            color: '#155724',
                          },
                        }}
                      >
                        ✅ Message sent successfully! We'll get back to you soon.
                      </Alert>
                    </motion.div>
                  )}
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5568',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Name *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Enter Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(159, 188, 143, 0.1)',
                            borderRadius: '12px',
                            '& fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#7ba05b',
                            },
                          },
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5568',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Email *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Enter Work Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(159, 188, 143, 0.1)',
                            borderRadius: '12px',
                            '& fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#7ba05b',
                            },
                          },
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5568',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Interest Area *
                      </Typography>
                      <TextField
                        fullWidth
                        select
                        placeholder="Select"
                        name="interestArea"
                        value={formData.interestArea}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(159, 188, 143, 0.1)',
                            borderRadius: '12px',
                            '& fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#7ba05b',
                            },
                          },
                        }}
                      >
                        {interestAreas.map((area) => (
                          <MenuItem key={area} value={area}>
                            {area}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4a5568',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Your Message *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(159, 188, 143, 0.1)',
                            borderRadius: '12px',
                            '& fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(159, 188, 143, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#7ba05b',
                            },
                          },
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: '#000',
                          color: 'white',
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          borderRadius: '12px',
                          '&:hover': {
                            backgroundColor: '#333',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
