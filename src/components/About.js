import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 4, md: 8 },
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        position: 'relative',
        width: '100%',
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0 }}>
        {/* Inner grayish container - contains everything */}
        <Box 
          sx={{ 
            backgroundColor: '#f5f5f5',
            borderRadius: 4,
            p: { xs: 4, md: 8 },
            position: 'relative',
            minHeight: '80vh',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f0f0f0',
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          {/* First Section - About Us */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            {/* Left Column - About Us heading, description and curved arrow */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3.5rem', md: '5rem' },
                    fontWeight: 400,
                    color: '#1a1a1a',
                    mb: 4,
                    lineHeight: 1.1,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#333',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                      transform: 'translateX(10px)',
                    },
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.8,
                    mb: 6,
                    maxWidth: 450,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#444',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  We're a global venture studio focused on creating lasting value beyond donations by empowering youth and communities with pathways to success.
                </Typography>

                {/* Curved Arrow Graphic - exactly like screenshot */}
                <Box 
                  sx={{ 
                    position: 'relative', 
                    height: 200, 
                    width: 200, 
                    mt: 4,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'rotate(5deg) scale(1.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqVIAaE8EXsd3KjDDCTSfJnehAmL2ObJyFE5ABhSs4b3YY8C1)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      mixBlendMode: 'multiply',
                      filter: 'brightness(1.2) contrast(1.1)',
                   
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            {/* Center Column - Stats and Map */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: 4,
                    p: { xs: 4, md: 4 },
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: '#f8f8f8',
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  {/* Stats Section */}
                  <Box sx={{ textAlign: 'center', mb: 6 ,}}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 4,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'rotate(360deg) scale(1.2)',
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      <img
                        src="/images/earth.png"
                        alt="Earth icon"
                        width="60"
                        height="60"
                        style={{ 
                          transition: 'all 0.3s ease',
                          objectFit: 'cover',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                    
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
                        fontWeight: 700,
                        color: '#1a1a1a',
                        mb: 3,
                        lineHeight: 1,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        wordBreak: 'keep-all',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                        '&:hover': {
                          color: '#333',
                          transform: 'scale(1.05)',
                          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      10,000+
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        color: '#666',
                        lineHeight: 1.6,
                        maxWidth: 280,
                        mx: 'auto',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#444',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Lives we aim to positively impact globally in the next two years
                    </Typography>
                  </Box>

                  {/* Map Visualization - white background with curved borders */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      borderRadius: 3,
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundImage: 'url(/images/w.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                        backgroundSize: '110% 110%',
                      },
                    }}
                  >
                    {/* Optional overlay for better text readability if needed */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
           
            {/* Right Column - Team Image and Description */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Team Image with arch windows - exactly like screenshot */}
                <Box
                  sx={{
                    width: '100%',
                    height: 200,
                    borderRadius: 3,
                    mb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#e8e8e8',
                    backgroundImage: 'url(https://ungluong.scp.com.vn/static/media/pic8.325f5fc05af85a3e46f0.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.05)',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                      backgroundSize: '110% 110%',
                    },
                  }}
                >
                  {/* Optional overlay for better contrast if needed */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>

                {/* Description Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.7,
                    mb: 3,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#444',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  Our approach is different. We don't just donate — we build sustainable solutions. Some of our ventures are publicly visible, while others are in stealth mode as they develop. What unites them all is a commitment to adding value to humanity.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.7,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#444',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  At Humanity Founder, we are not chasing trends. We're creating a movement. A movement for accessible growth, meaningful employment, and a more equitable world.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* Mission Section and Cards - Gradient Background Container */}
          <Box
            sx={{
              // background: 'linear-gradient(180deg, #f8fbff 0%, #fffef7 40%, #fff9e6 60%, #f8fbff 100%)',
              background:'#ffffff',
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              mt: 4,
            }}
          >
            {/* Mission Section */}
            <Grid container spacing={4}>
              {/* Left Column - Mission Statement */}
              <Grid item xs={12} md={8}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#a8c686',
                      borderRadius: 4,
                      p: { xs: 4, md: 6 },
                      color: 'white',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: '#A4C49A',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(184, 212, 174, 0.3)',
                      },
                    }}
                  >
                    {/* Decorative lines */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        left: 40,
                        width: 30,
                        height: 2,
                        backgroundColor: 'white',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 8,
                          left: 0,
                          width: 20,
                          height: 2,
                          backgroundColor: 'white',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 16,
                          left: 0,
                          width: 15,
                          height: 2,
                          backgroundColor: 'white',
                        }
                      }}
                    />

                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: '1.3rem',
                        letterSpacing: 2,
                        color: 'white',
                        mb: 3,
                        display: 'block',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          letterSpacing: 3,
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      OUR MISSION
                    </Typography>

                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '2.5rem', md: '3.4rem' },
                        fontWeight: 400,
                        lineHeight: 1.2,
                        mb: 0,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(10px)',
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        },
                      }}
                    >
                      Creating Founders — For  
                      <br />
                      Humanity's Future
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              {/* Right Column - Social Impact */}
              <Grid item xs={12} md={4}>
                <motion.div
                  
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: 4,
                      p: { xs: 4, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        border: '1px solid #d0d0d0',
                      },
                    }}
                  >
                    {/* Rocket Icon */}
                    <Box 
                      sx={{ 
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-5px) rotate(10deg)',
                        },
                      }}
                    >
                      <img
                        src="/images/shuttle.png"
                        alt="Shuttle icon"
                        width="60"
                        height="60"
                        style={{ 
                          transition: 'all 0.3s ease',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#333',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      01  Social Impact
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        color: '#666',
                        lineHeight: 1.6,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#444',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      We build what that matters - projects that solve real problems and uplift lives at scale.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            {/* Bottom Row - Three Cards */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {/* Accessible Resources */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: 4,
                      p: { xs: 4, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: '#fafafa',
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #d0d0d0',
                      },
                    }}
                  >
                    {/* Target Icon */}
                    <Box 
                      sx={{ 
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'scale(1.2) rotate(180deg)',
                        },
                      }}
                    >
                      <img
                        src="/images/aim.png"
                        alt="Target icon"
                        width="60"
                        height="60"
                        style={{ 
                          transition: 'all 0.3s ease',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#333',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      02 Accessible Resources
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        color: '#666',
                        lineHeight: 1.6,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#444',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Knowledge should be free. We break down barriers, not build them.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              {/* AI-Driven Solutions */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: 4,
                      p: { xs: 4, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      border: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: '#f8f8f8',
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #d0d0d0',
                      },
                    }}
                  >
                  

                    {/* 3D Cube Icon */}
                    <Box 
                      sx={{ 
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'rotateX(20deg) rotateY(20deg) scale(1.1)',
                        },
                      }}
                    >
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transition: 'all 0.3s ease' }}
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                        <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                        <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#333',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      03 AI-Driven Solutions
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        color: '#666',
                        lineHeight: 1.6,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#444',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      We harness the power of AI to create smart, meaningful paths toward education, work and innovation.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              {/* Inclusive Innovation */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: 4,
                      p: { xs: 4, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: '#f8f8f8',
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #d0d0d0',
                      },
                    }}
                  >
                    {/* Award/Trophy Icon */}
                    <Box 
                      sx={{ 
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-5px) scale(1.2)',
                        },
                      }}
                    >
                          <img
                            src="/images/pen-tool.png"
                            alt="Award icon"
                            width="60"
                            height="60"
                            style={{ 
                              transition: 'all 0.3s ease',
                              transform: 'rotate(180deg)',
                              objectFit: 'contain',
                            }}
                          />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#333',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      04 Inclusive Innovation
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '0.98rem',
                        color: '#666',
                        lineHeight: 1.6,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#444',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      We grow with people bringing  together builders, dreamers, and  doers who care more about impact than profit.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 