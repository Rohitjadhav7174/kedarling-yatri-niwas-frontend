

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  Box
} from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [openCheckoutDialog, setOpenCheckoutDialog] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);

  const fetchBookings = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      const response = await axios.get('http://localhost:5001/api/admin/bookings');
      if (response.data && Array.isArray(response.data.bookings)) {
        setBookings(response.data.bookings);
      } else {
        setBookings([]);
        setApiError('Invalid data format received from server');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setApiError(error.response?.data?.message || 'Failed to fetch bookings');
      setBookings([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/api/admin/login', {
        username,
        password
      });
      
      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.put(`http://localhost:5001/api/bookings/${selectedBooking._id}/checkout`);
      fetchBookings();
      setOpenCheckoutDialog(false);
    } catch (error) {
      console.error('Error during checkout:', error);
      setApiError(error.response?.data?.message || 'Checkout failed');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!isAuthenticated) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Admin Login
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
          >
            Login
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>
      
      {apiError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {apiError}
        </Alert>
      )}

      {isLoading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
           <TableHead>
  <TableRow>
    <TableCell>Booking ID</TableCell>
    <TableCell>Customer</TableCell>
    <TableCell>Rooms</TableCell>
    <TableCell>Check-in</TableCell>
    <TableCell>Check-out</TableCell>
    <TableCell>Arrival Time</TableCell>
    <TableCell>Amount</TableCell>
    <TableCell>Payment</TableCell>
    <TableCell>Method</TableCell>
    <TableCell>Actions</TableCell>
  </TableRow>
</TableHead>
           <TableBody>
  {bookings.map((booking) => (
    <TableRow key={booking._id}>
      <TableCell>{booking._id.substring(18)}</TableCell>
      <TableCell>
        {booking.customerName}<br/>
        {booking.customerPhone}
      </TableCell>
      <TableCell>
        {booking.selectedRooms.map(room => (
          <div key={room.roomNumber}>
            {room.roomNumber} (₹{room.price})
          </div>
        ))}
      </TableCell>
      <TableCell>{formatDate(booking.checkInDate)}</TableCell>
      <TableCell>{formatDate(booking.checkOutDate)}</TableCell>
      <TableCell>
        {booking.arrivalTime ? new Date(booking.arrivalTime).toLocaleTimeString() : 'N/A'}
      </TableCell>
      <TableCell>₹{booking.totalAmount}</TableCell>
      <TableCell>
        <span style={{ 
          color: booking.paymentStatus === 'Completed' ? 'green' : 'orange',
          fontWeight: 'bold'
        }}>
          {booking.paymentStatus}
        </span>
      </TableCell>
      <TableCell>
        {booking.paymentMethod}
      </TableCell>
      <TableCell>
        <Button 
          variant="outlined" 
          color="secondary"
          onClick={() => {
            setSelectedBooking(booking);
            setOpenCheckoutDialog(true);
          }}
          disabled={booking.paymentStatus !== 'Completed'}
        >
          Checkout
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog
        open={openCheckoutDialog}
        onClose={() => setOpenCheckoutDialog(false)}
      >
        <DialogTitle>Confirm Checkout</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to check out {selectedBooking?.customerName} from {selectedBooking?.roomNumber}?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            This will make the room available for new bookings.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCheckoutDialog(false)}>Cancel</Button>
          <Button onClick={handleCheckout} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;