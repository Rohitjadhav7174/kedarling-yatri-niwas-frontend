import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Paper, Typography, TextField, 
  Button, Box, Alert 
} from '@mui/material';
import { Lock as LockIcon, Person as PersonIcon } from '@mui/icons-material';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Store admin auth token and redirect
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />
            }}
            required
          />
          
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: <LockIcon sx={{ mr: 1, color: 'action.active' }} />
            }}
            required
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{ mt: 3 }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin;