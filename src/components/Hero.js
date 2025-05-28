import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const handleScheduleCall = () => {
    // Add your scheduling logic here
    window.open('https://calendly.com/humanityfounders/30min', '_blank');
    console.log('Schedule a call clicked');
  };

  // Animated background text component - only within Hero section
  const AnimatedBackgroundText = ({ index }) => {
    const isEven = index % 2 === 0;
    
    return (
      <motion.div
        key={index}
        animate={{
          x: isEven ? '-50%' : '50%',
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{
          position: 'absolute',
          top: `${index * 18}%`,
          whiteSpace: 'nowrap',
          zIndex: 0,
          width: '200%',
          left: isEven ? '0%' : '-50%',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '4rem', md: '6rem', lg: '8rem' },
            fontWeight: 900,
            color: 'rgba(255, 255, 255, 0.1)',
            WebkitTextStroke: '2px rgba(200, 200, 200, 0.3)',
            lineHeight: 1.2,
            userSelect: 'none',
            letterSpacing: '-0.02em',
            mb: 4,
          }}
        >
          HUMANITY FOUNDERS HUMANITY FOUNDERS HUMANITY FOUNDERS HUMANITY FOUNDERS
        </Typography>
      </motion.div>
    );
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 14 }, // Start below navbar with extra space
      }}
    >
      {/* Animated background text elements - HUMANITY FOUNDERS behind everything */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {[...Array(6)].map((_, index) => (
          <AnimatedBackgroundText key={index} index={index} />
        ))}
      </Box>

      {/* Main content container with border */}
      <Container 
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
        }}
      >
        <Box
          sx={{
            background: 'url(/images/6165921987659155382.jpg) center center / cover no-repeat',
            borderRadius: '20px',
            minHeight: { xs: '70vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            mx: { xs: 1, sm: 2, md: 3, lg: 4 },
            my: { xs: 2, md: 3 },
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1,
              transition: 'all 0.4s ease',
            },
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              '&::before': {
                background: 'rgba(0, 0, 0, 0.2)',
              },
            },
          }}
        >
          <Container 
            maxWidth="lg" 
            sx={{ 
              textAlign: 'center',
              py: { xs: 4, md: 8 },
              position: 'relative',
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                  lineHeight: 1.1,
                  maxWidth: 900,
                  mx: 'auto',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9)',
                    color: '#f0f0f0',
                  },
                }}
              >
                Building Real Change
                <br />
                Through Technology
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  mb: 6,
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.6,
                  px: { xs: 2, sm: 0 },
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
                    color: '#f0f0f0',
                  },
                }}
              >
                We're a purpose-driven venture studio using AI and innovation to make education, employment, and opportunity more accessible—starting in India, growing worldwide.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={handleScheduleCall}
                sx={{
                  backgroundColor: 'rgba(100, 100, 100, 0.8)',
                  color: '#fff',
                  borderRadius: '50px',
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.8, md: 2.2 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 500,
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    transition: 'left 0.5s ease',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(120, 120, 120, 0.9)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    '&::before': {
                      left: '100%',
                    },
                    '& .MuiSvgIcon-root': {
                      transform: 'translateX(5px)',
                    },
                  },
                  '& .MuiSvgIcon-root': {
                    transition: 'transform 0.3s ease',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Schedule a Call
              </Button>
            </motion.div>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 