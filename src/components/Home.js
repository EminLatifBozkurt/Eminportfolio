import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.2) 0%, rgba(33, 150, 243, 0.2) 100%)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(156, 39, 176, 0.3) 0%, rgba(33, 150, 243, 0.3) 100%)',
          animation: 'gradient 15s ease infinite',
          zIndex: 1,
        },
        '@keyframes gradient': {
          '0%': {
            opacity: 0.5,
          },
          '50%': {
            opacity: 0.8,
          },
          '100%': {
            opacity: 0.5,
          },
        },
      }}
    >
      <Container sx={{ 
        position: 'relative', 
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}>
        <Box
          sx={{
            width: { xs: 200, md: 250 },
            height: { xs: 200, md: 250 },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -3,
              left: -3,
              right: -3,
              bottom: -3,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
              animation: 'spin 8s linear infinite',
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
              animation: 'spin 8s linear infinite reverse',
              filter: 'blur(8px)',
              zIndex: 0,
            },
            '@keyframes spin': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          }}
        >
          <Avatar
            src="/images/profil.png"
            alt="Profile Photo"
            sx={{
              width: '100%',
              height: '100%',
              border: '4px solid rgba(18, 18, 18, 0.95)',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Emin Latif Bozkurt
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              opacity: 0.9,
            }}
          >
            Computer Engineering Student
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 