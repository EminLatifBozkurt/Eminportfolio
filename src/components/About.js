import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            background: 'rgba(18, 18, 18, 0.95)',
            borderRadius: 2,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(156, 39, 176, 0.3)',
            boxShadow: '0 0 20px rgba(156, 39, 176, 0.2)',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: 'transparent',
              background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
            }}
          >
            Ben Kimim
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              textAlign: 'justify',
            }}
          >
            Merhaba, ben Emin Latif Bozkurt. Fırat Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.
            Teknolojiye ve yazılıma olan tutkumla, kendimi sürekli geliştirmeyi ve yeni şeyler öğrenmeyi hedefliyorum.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              textAlign: 'justify',
              mt: 2,
            }}
          >
            Henüz iş deneyimim bulunmasa da, geliştirdiğim projelerle teorik bilgilerimi pratiğe döküyorum.
            Yazılım dünyasındaki gelişmeleri yakından takip ediyor ve her geçen gün yeteneklerime bir yenisini eklemek için çalışıyorum.
            Boş zamanlarımda da kod yazarak ve araştırma yaparak kendimi dinç tutuyorum.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;