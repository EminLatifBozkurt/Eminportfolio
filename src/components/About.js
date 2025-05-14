import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { Person, School, Work } from '@mui/icons-material';

function About() {
  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Person sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Who I Am
            </Typography>
            <Typography>
              A passionate developer with a keen eye for detail and a drive for creating
              elegant solutions to complex problems.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <School sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            <Typography>
              Bachelor's degree in Computer Science with a focus on web development
              and software engineering.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Work sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Experience
            </Typography>
            <Typography>
              Over 3 years of experience in full-stack development, working with
              modern technologies and frameworks.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About; 