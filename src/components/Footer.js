import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          sx={{
            color: 'var(--text-secondary)',
            textAlign: 'center'
          }}
        >
          © {new Date().getFullYear()} Emin Latif Bozkurt. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 