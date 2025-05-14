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
              Merhaba ben Emin , Bilgisayar Mühendisiyim ve yazılım geliştirme ile ilgileniyorum, oyun 
              geliştirme , siber güvenlik , yapay zeka ve kripto paralarla ilgileniyorum.
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
              Balıkesir Üniversitesi Bilgisayar Mühendisliği 2.sınıf öğrencisiyim.
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
              Balıkesir Üniversitesi EBST  (Elektrik ve Bilgisayar Sistemleri Topluluğu) yönetim kurulunda görev almaktayım,
              İş tecrübem olmasada kendimi geliştirmeye çalışıyorum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About; 