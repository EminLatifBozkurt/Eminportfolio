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
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://via.placeholder.com/400x200',
    github: '#',
    demo: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Task Management App',
    description: 'A task management application with real-time updates',
    image: 'https://via.placeholder.com/400x200',
    github: '#',
    demo: '#',
    technologies: ['React', 'Firebase', 'Material-UI'],
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard using OpenWeather API',
    image: 'https://via.placeholder.com/400x200',
    github: '#',
    demo: '#',
    technologies: ['JavaScript', 'REST API', 'Bootstrap'],
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
                height: '100%',
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
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  filter: 'brightness(0.8)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1)',
                  },
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
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHub />}
                  href={project.github}
                  target="_blank"
                  sx={{
                    color: '#fff',
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
                <Button
                  size="small"
                  startIcon={<Launch />}
                  href={project.demo}
                  target="_blank"
                  sx={{
                    ml: 1,
                    color: '#fff',
                    background: 'linear-gradient(45deg, #2196f3 30%, #9c27b0 90%)',
                    boxShadow: '0 0 10px rgba(33, 150, 243, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976d2 30%, #7b1fa2 90%)',
                      boxShadow: '0 0 15px rgba(33, 150, 243, 0.5)',
                    },
                  }}
                >
                  Live Demo
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