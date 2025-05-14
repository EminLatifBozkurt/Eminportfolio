import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';

const projects = [
  {
    title: 'Oyun Satış Uygulaması',
    description: 'Mini bir oyun satın alma uygulaması  ',
    github: 'https://github.com/EminLatifBozkurt/oyun-sat-uygulamas-',
    image: '/images/oyun.png',
    technologies: ['PyQt5', 'SQLite', 'CSS','Python'],
  },
  {
    title: 'Basit Word',
    description: 'Word uygulamasının basitleştirilmiş hali ',
    github: 'https://github.com/EminLatifBozkurt/Basit-word-uygulamas-',
    image: '/images/mini word.png',
    technologies: ['PyQt5','Python'],
  },
  {
    title: 'Soru Bankası',
    description: 'Soru bankası hazırlamak için basit bir proje',
    github: 'https://github.com/EminLatifBozkurt/Soru-Bankas-',
    image: '/images/sorubankası.png',
    technologies: [ 'PyQt5','Python','QTDesigner'],
  },
];

function Portfolio() {
  return (
    <Container>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom
        sx={{
          background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
        }}
      >
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                background: 'rgba(30, 30, 30, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(156, 39, 176, 0.1)',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
                  border: '1px solid rgba(156, 39, 176, 0.3)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={project.image}
                alt={project.title}
                sx={{
                  filter: 'brightness(0.8)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1)',
                  },
                  objectFit: 'cover'
                }}
              />
              <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h3"
                  sx={{
                    background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  {project.description}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2,
                    color: 'rgba(255,255,255,0.6)',
                    textShadow: '0 0 5px rgba(33, 150, 243, 0.3)',
                  }}
                >
                  Technologies: {project.technologies.join(', ')}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  size="large"
                  startIcon={<GitHub />}
                  href={project.github}
                  target="_blank"
                  sx={{
                    color: '#fff',
                    width: '200px',
                    padding: '10px 0',
                    background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
                    boxShadow: '0 0 10px rgba(156, 39, 176, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #7b1fa2 30%, #1976d2 90%)',
                      boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)',
                    },
                  }}
                >
                  Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Portfolio; 