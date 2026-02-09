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
import { motion } from 'framer-motion';

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
    <Box sx={{ py: 10, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            <span className="gradient-text">İletişim</span>
          </Typography>

          <Paper
            elevation={0}
            className="glass-card"
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
            }}
          >
            {formik.status?.success && (
              <Alert
                severity="success"
                sx={{
                  mb: 4,
                  backgroundColor: 'rgba(46, 125, 50, 0.1)',
                  color: '#81c784',
                  border: '1px solid rgba(46, 125, 50, 0.3)',
                }}
              >
                Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağım.
              </Alert>
            )}
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="İsim"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                      '&:hover fieldset': { borderColor: 'rgba(156, 39, 176, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#9c27b0' },
                    '& .MuiFormHelperText-root': { color: '#f44336' },
                  }}
                />
              </Box>
              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="E-posta"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                      '&:hover fieldset': { borderColor: 'rgba(156, 39, 176, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#9c27b0' },
                  }}
                />
              </Box>
              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Mesaj"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                      '&:hover fieldset': { borderColor: 'rgba(156, 39, 176, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                      color: 'white',
                    },
                    '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#9c27b0' },
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
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  background: 'linear-gradient(45deg, #9c27b0 30%, #2196f3 90%)',
                  boxShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #7b1fa2 30%, #1976d2 90%)',
                    boxShadow: '0 0 30px rgba(156, 39, 176, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                  '&:disabled': {
                    background: 'rgba(156, 39, 176, 0.3)',
                    color: 'rgba(255,255,255,0.3)'
                  },
                }}
              >
                {formik.isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact; 