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
            Merhaba! Ben Emin, 20 yaşında bir bilgisayar mühendisliği öğrencisiyim. Teknoloji ve yazılım 
            dünyasına olan tutkum, beni sürekli yeni şeyler öğrenmeye yönlendiriyor. Yazılım geliştirme, 
            oyun geliştirme, siber güvenlik, yapay zeka ve kripto paralar alanlarında kendimi geliştiriyorum.
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
            Balıkesir Üniversitesi Bilgisayar Mühendisliği 3.sınıf öğrencisiyim. EBST (Elektrik ve Bilgisayar 
            Sistemleri Topluluğu) yönetim kurulunda görev alıyorum. Boş zamanlarımda yeni teknolojileri 
            keşfetmeyi ve projeler geliştirmeyi seviyorum. Sürekli kendimi geliştirmeye odaklanıyorum ve 
            yeni fırsatlar arıyorum.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;