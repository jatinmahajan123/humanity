import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const handleScheduleCall = () => {
    // Add your scheduling logic here
    window.open('https://calendly.com/humanityfounders/30min', '_blank');
    console.log('Schedule a call clicked');
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            sx={{ py: 2 }}
          >
            <ListItemText
              primary={item.name}
              sx={{ textAlign: 'center' }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ py: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleScheduleCall}
            sx={{
              backgroundColor: '#000',
              color: 'white',
              borderRadius: '25px',
              textTransform: 'none',
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Schedule a Call
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease',
          color: '#000',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, mx: 'auto', width: '100%', py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GroupsIcon 
                sx={{ 
                  fontSize: 40, 
                  color: '#000',
                }} 
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: '#000',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                }}
              >
                HUMANITY<br />FOUNDERS
              </Typography>
            </Box>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      color="inherit"
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        fontWeight: 500,
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: '#000',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  onClick={handleScheduleCall}
                  sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    borderRadius: '25px',
                    textTransform: 'none',
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#333',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 