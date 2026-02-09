import React from 'react';
import { Container, Typography, Grid, Paper, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { skills } from '../data/constants';

function Skills() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box sx={{ py: 10, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            <span className="gradient-text">Neler Yapabilirim?</span>
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill.name} component={motion.div} variants={item}>
              <Link
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none' }}
              >
                <Paper
                  elevation={0}
                  className="glass-card"
                  sx={{
                    p: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      background: 'rgba(156, 39, 176, 0.15)',
                      boxShadow: '0 0 30px rgba(156, 39, 176, 0.3)',
                      border: '1px solid rgba(156, 39, 176, 0.5)',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '160px',
                    borderRadius: 4,
                  }}
                >
                  <Box sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {React.createElement(skill.icon, {
                      size: 40,
                      style: { color: '#ffffff' }
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills; 