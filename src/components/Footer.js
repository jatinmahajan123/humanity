import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  // SRK's official social media links
  const socialLinks = [
    { 
      icon: <TwitterIcon />, 
      href: 'https://x.com/humanityfunders', 
      color: '#1da1f2',
      label: 'Twitter'
    },
    { 
      icon: <FacebookIcon />, 
      href: 'https://www.facebook.com/humanityfounders', 
      color: '#4267b2',
      label: 'Facebook'
    },
    { 
      icon: <InstagramIcon />, 
      href: 'https://www.instagram.com/humanityfounders', 
      color: '#e4405f',
      label: 'Instagram'
    },
    { 
      icon: <GitHubIcon />, 
      href: 'https://github.com/HumanityFounders', 
      color: '#333',
      label: 'GitHub'
    },
    {
        icon: <LinkedInIcon />,
        href: 'https://www.linkedin.com/company/humanityfounders',
        color: '#0077b5',
        label: 'LinkedIn'
    }
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Logo and Social Icons */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              {/* Logo */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Typography
                  sx={{
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                  }}
                >
                  HF
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  fontSize: '0.9rem',
                }}
              >
                HUMANITY FOUNDERS
              </Typography>
            </Box>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  onClick={() => handleLinkClick(social.href)}
                  sx={{
                    color: 'white',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      color: social.color,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Center - Navigation Links */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => handleLinkClick(link.href)}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 400,
                    '&:hover': {
                      color: '#ccc',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right Side - Contact Information */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'white',
                  fontSize: '1rem',
                }}
              >
                GET IN TOUCH
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 0.5,
                  fontSize: '0.85rem',
                }}
              >
                info@humanityfounderstudio.org
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.85rem',
                }}
              >
                +91 9677682299
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 4 }} />

        {/* Bottom Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.85rem',
            }}
          >
            Copyright ©Humanity Founders 2025, All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
