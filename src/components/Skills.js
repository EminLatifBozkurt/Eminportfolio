import React from 'react';
import { Container, Typography, Grid, Paper, Box, Link } from '@mui/material';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiAutodesk, SiDotnet } from 'react-icons/si';

const skills = [
  { name: 'React', url: 'https://reactjs.org', icon: FaReact },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: FaJs },
  { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: FaHtml5 },
  { name: 'Node.js', url: 'https://nodejs.org', icon: FaNodeJs },
  { name: 'Python', url: 'https://www.python.org', icon: FaPython },
  { name: 'SQL', url: 'https://www.w3schools.com/sql', icon: FaDatabase },
  { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp', icon: SiDotnet },
  { name: 'Fusion 360', url: 'https://www.autodesk.com/products/fusion-360', icon: SiAutodesk }
];

function Skills() {
  return (
    <Container>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 4,
          background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Link 
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
                    background: 'linear-gradient(45deg, rgba(156, 39, 176, 0.2), rgba(33, 150, 243, 0.2))',
                  },
                  background: 'rgba(30, 30, 30, 0.9)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100px',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {React.createElement(skill.icon, {
                    size: 24,
                    style: {
                      color: '#9c27b0'
                    }
                  })}
                  <Typography 
                    variant="h6"
                    sx={{
                      background: 'linear-gradient(45deg, #9c27b0, #2196f3)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills; 