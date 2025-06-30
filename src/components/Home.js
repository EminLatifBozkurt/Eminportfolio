import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
        >
          <Avatar
            src="/images/profil.png"
            alt="Profile Photo"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 }
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              textAlign: 'center'
            }}
          >
            Merhaba!
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              textAlign: 'center'
            }}
          >
            Ben Emin Latif Bozkurt
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center'
            }}
          >
            Bilgisayar Mühendisliği Öğrencisiyim
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mt: 2
            }}
          >
            Portfolyoma Hoş Geldiniz!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 