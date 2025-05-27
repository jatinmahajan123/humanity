import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    {
      number: '15.7%',
      description: 'Youth unemployment rate in India as of 2023, despite millions holding degrees.',
    },
    {
      number: '58%',
      description: 'Schools across India still lack basic internet access, limiting digital learning.',
    },
    {
      number: '65.7%',
      description: 'Educated young people make up the majority of India\'s unemployed population.',
    },
    {
      number: '2X',
      description: 'Community-driven innovation grows faster when opportunities are inclusive.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 4, md: 8 },
        backgroundColor: 'transparent',
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
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      borderRadius: 3,
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                        borderColor: 'rgba(37, 99, 235, 0.2)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        textAlign: 'center',
                        p: { xs: 3, md: 4 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.1 + 0.2,
                          type: 'spring',
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontSize: { xs: '3rem', md: '4rem' },
                            fontWeight: 700,
                            color: '#1a202c',
                            mb: 2,
                            lineHeight: 1,
                            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {stat.number}
                        </Typography>
                      </motion.div>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#64748b',
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {stat.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Statistics; 