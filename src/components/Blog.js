import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blog = () => {
  const featuredPost = {
    title: 'Why Tech-Driven Solutions Must Serve Humanity First',
    excerpt: 'Technology should uplift human lives, not just drive profits. Explore why building tech solutions with a humanity-first mindset is essential for meaningful, inclusive, and lasting global progress.',
    readTime: '8 MIN READ',
    category: 'IMPACT',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    categoryColor: '#10b981', // green color for IMPACT
  };

  const recentPosts = [
    {
      title: 'Why Tech-Driven Solutions Must Serve Humanity First',
      readTime: '8 MIN READ',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop',
    },
    {
      title: 'Breaking Barriers: Making AI Education Free and Accessible for All',
      readTime: '10 MIN READ',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
    },
    {
      title: 'Turning Unemployment Into Opportunities for Youth',
      readTime: '6 MIN READ',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop',
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
          {/* Section Header */}
          <Box sx={{ mb: 6 }}>
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
              Recent blog
            </Typography>
          </Box>

          {/* Featured Post - Full Width on Top */}
          <Box sx={{ mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 280,
                        objectFit: 'cover',
                      }}
                      image={featuredPost.image}
                      alt={featuredPost.title}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ py: 2 }}>
                    <Box sx={{ mb: 3 }}>
                      <Chip
                        label={featuredPost.category}
                        sx={{
                          backgroundColor: featuredPost.categoryColor,
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          mr: 2,
                          height: '24px',
                        }}
                      />
                      <Typography
                        component="span"
                        sx={{
                          color: '#666',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        · {featuredPost.readTime}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                        lineHeight: 1.3,
                      }}
                    >
                      {featuredPost.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.6,
                        mb: 4,
                        fontSize: '1rem',
                      }}
                    >
                      {featuredPost.excerpt}
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: '#000',
                        color: 'white',
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        '&:hover': {
                          backgroundColor: '#333',
                          transform: 'translateX(4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      READ MORE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Box>

          {/* Recent Posts - Horizontal Row at Bottom */}
          <Grid container spacing={4}>
            {recentPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#ffffff',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                        objectFit: 'cover',
                      }}
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent
                      sx={{
                        flex: 1,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#666',
                          fontSize: '0.75rem',
                          mb: 1,
                          fontWeight: 500,
                        }}
                      >
                        · {post.readTime}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          lineHeight: 1.4,
                          flexGrow: 1,
                        }}
                      >
                        {post.title}
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

export default Blog; 