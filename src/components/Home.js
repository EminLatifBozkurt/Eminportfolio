import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/constants';

function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(156, 39, 176, 0.15) 0%, rgba(10, 10, 10, 1) 70%)',
          zIndex: 0,
        }}
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <Avatar
              src="/images/profil.png"
              alt={personalInfo.name}
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
                border: '4px solid rgba(156, 39, 176, 0.5)',
                boxShadow: '0 0 30px rgba(156, 39, 176, 0.3)',
              }}
            />
          </motion.div>

          <Box textAlign="center">
            <Typography
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              variant="h3"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Merhaba!
            </Typography>

            <Typography
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              variant="h2"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Ben {personalInfo.name}
            </Typography>

            <Typography
              component={motion.h5}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              variant="h5"
              sx={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {personalInfo.title}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 