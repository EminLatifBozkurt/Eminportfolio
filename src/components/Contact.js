import React from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('İsim zorunludur')
    .min(2, 'İsim en az 2 karakter olmalıdır'),
  email: yup
    .string()
    .email('Geçerli bir e-posta adresi giriniz')
    .required('E-posta zorunludur'),
  message: yup
    .string()
    .required('Mesaj zorunludur')
    .min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      // Here you would typically send the form data to your backend
      console.log(values);
      setTimeout(() => {
        setStatus({ success: true });
        setSubmitting(false);
        resetForm();
      }, 1000);
    },
  });

  return (
    <Container maxWidth="md">
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
        İletişim
      </Typography>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4,
          background: 'rgba(30, 30, 30, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(156, 39, 176, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(156, 39, 176, 0.2)',
            border: '1px solid rgba(156, 39, 176, 0.2)',
          },
        }}
      >
        {formik.status?.success && (
          <Alert 
            severity="success" 
            sx={{ 
              mb: 2,
              backgroundColor: 'rgba(46, 125, 50, 0.1)',
              color: '#66bb6a',
              border: '1px solid #66bb6a',
            }}
          >
            Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağım.
          </Alert>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="İsim"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(156, 39, 176, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(156, 39, 176, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#9c27b0',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#9c27b0',
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-posta"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(156, 39, 176, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(156, 39, 176, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#9c27b0',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#9c27b0',
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Mesaj"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(156, 39, 176, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(156, 39, 176, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#9c27b0',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#9c27b0',
                },
              }}
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
            sx={{
              py: 1.5,
              background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
              boxShadow: '0 0 10px rgba(156, 39, 176, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, #7b1fa2 30%, #1976d2 90%)',
                boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)',
              },
              '&:disabled': {
                background: 'rgba(156, 39, 176, 0.3)',
              },
            }}
          >
            {formik.isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Contact; 