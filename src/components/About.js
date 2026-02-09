import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/constants';

function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        py: 10
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            className="glass-card"
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 4,
                textAlign: 'center',
                fontWeight: 700,
              }}
            >
              <span className="gradient-text">Ben Kimim?</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: '1.2rem',
                textAlign: 'justify',
              }}
            >
              {personalInfo.bio}
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;