import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { GitHub, Twitter, Facebook, LinkedIn, Instagram } from '@mui/icons-material';

const pages = ['Ana Sayfa', 'Ben Kimim?', 'Neler Yapabilirim?', 'Portfolyo', 'İletişim'];

const socialLinks = [
  { icon: <GitHub />, url: 'https://github.com/EminLatifBozkurt', label: 'GitHub' },
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/emin-latif-bozkurt-040bab295/', label: 'LinkedIn' },
  { icon: <Instagram />, url: 'https://www.instagram.com/b.eminltf_01/', label: 'Instagram' },
  { icon: <Facebook />, url: 'https://www.facebook.com/emin.bozkurt.5036459/', label: 'Facebook' },
  { icon: <Twitter />, url: 'https://x.com/beminltf_01', label: 'Twitter' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getSectionId = (page) => {
    switch(page) {
      case 'Ana Sayfa': return 'top';
      case 'Ben Kimim?': return 'about';
      case 'Neler Yapabilirim?': return 'skills';
      case 'Portfolyo': return 'portfolio';
      case 'İletişim': return 'contact';
      default: return '';
    }
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <ScrollLink
                    to={getSectionId(page)}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    style={{ textDecoration: 'none', color: 'inherit', width: '100%', textAlign: 'center' }}
                  >
                    {page}
                  </ScrollLink>
                </MenuItem>
              ))}
              <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 1, pt: 1 }}>
                <Stack 
                  direction="row" 
                  spacing={1}
                  justifyContent="center"
                  sx={{ p: 1 }}
                >
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      aria-label={social.label}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
                          boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <ScrollLink
                  to={getSectionId(page)}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {page}
                </ScrollLink>
              </Button>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Stack 
            direction="row" 
            spacing={1}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                aria-label={social.label}
                sx={{
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
                    boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 