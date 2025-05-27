import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ashley Cooper',
      text: 'Joining Humanity Founder changed my journey. The free AI resources gave me the confidence and skills to apply for roles I never imagined I could reach.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b566?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Jackline Fare',
      text: "Being a mentor here has been transformative. It's more than volunteering—it's being part of a mission to uplift communities through real, meaningful work.",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      text: 'The community here genuinely cares about making a difference. The AI education platform helped me transition from unemployment to a fulfilling tech career.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      text: 'What sets this organization apart is their commitment to accessibility. They made advanced AI education available to everyone, regardless of background.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'David Chen',
      text: 'The mentorship program connected me with industry professionals who guided me through my career transition. Forever grateful for this opportunity.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      text: 'This platform democratizes learning. The free resources and supportive community have empowered thousands of young people to build better futures.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Alex Rodriguez',
      text: 'The hands-on projects and real-world applications helped me understand AI concepts better than any traditional course. Now I work at a leading tech company!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Maya Patel',
      text: 'From struggling with unemployment to landing my dream job in just 6 months. The personalized learning path and career guidance made all the difference.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      rating: 5,
    },
  ];

  const itemsPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? '#fbbf24' : '#e5e7eb',
          fontSize: '1rem',
          marginRight: '2px',
        }}
      >
        ★
      </span>
    ));
  };

  // Get current testimonials to display
  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 4, md: 8 },
        backgroundColor: '#f8fafc',
        position: 'relative',
        width: '100%',
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Voices of Impact...
            </Typography>
          </Box>

          {/* Testimonials Container */}
          <Box 
            sx={{ 
              position: 'relative', 
              mx: { xs: 0, md: 4 },
            }}
          >
            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: { xs: -15, md: -50 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                width: 48,
                height: 48,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  transform: 'translateY(-50%) scale(1.1)',
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: { xs: -15, md: -50 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                width: 48,
                height: 48,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  transform: 'translateY(-50%) scale(1.1)',
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            {/* Carousel Content */}
            <Box
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                minHeight: '320px',
                position: 'relative',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'stretch',
                  }}
                >
                  {currentTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ flex: 1 }}
                    >
                      <Card
                        sx={{
                          backgroundColor: '#ffffff',
                          borderRadius: 3,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          height: '100%',
                          position: 'relative',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                          },
                        }}
                      >
                        <CardContent 
                          sx={{ 
                            p: 4, 
                            position: 'relative', 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}
                        >
                          {/* Quote Icon */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              fontSize: '4rem',
                              color: '#e5e7eb',
                              lineHeight: 1,
                              fontFamily: 'serif',
                              fontWeight: 'bold',
                            }}
                          >
                            "
                          </Box>

                          {/* Testimonial Text */}
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#4a5568',
                              lineHeight: 1.6,
                              fontSize: '1rem',
                              pr: 4,
                              mb: 3,
                            }}
                          >
                            {testimonial.text}
                          </Typography>

                          {/* Author Info */}
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              sx={{
                                width: 56,
                                height: 56,
                                border: '3px solid #e5e7eb',
                              }}
                            />
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: '1.1rem',
                                  fontWeight: 600,
                                  color: '#1a1a1a',
                                  mb: 0.5,
                                }}
                              >
                                {testimonial.name}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {renderStars(testimonial.rating)}
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>

          {/* Pagination Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 1.5 }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? '#2563eb' : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: currentIndex === index ? '#1d4ed8' : '#94a3b8',
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials; 