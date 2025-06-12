import React, { useState } from 'react';
import { 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Paper, 
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Chip,
  Alert,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormLabel,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  Upload as UploadIcon,
  QrCodeScanner as QrIcon,
  CheckCircle as CheckIcon,
  PendingActions as PendingIcon,
  Close as CloseIcon,
  AttachMoney as MoneyIcon,
  Phone as PhoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  AccessTime as TimeIcon,
  Hotel as HotelIcon
} from '@mui/icons-material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

const steps = ['Select Rooms', 'Guest Details', 'Payment & Confirmation'];

const BookingForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [roomType, setRoomType] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [roomsFetched, setRoomsFetched] = useState(false);
  
  // Payment related states
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [paymentProof, setPaymentProof] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  
  // UI states
  const [loading, setLoading] = useState(false);
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleNext = () => {
    if (activeStep === 0 && !roomsFetched) {
      fetchAvailableRooms();
      setRoomsFetched(true);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setRoomsFetched(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setRoomsFetched(false);
  };

  const fetchAvailableRooms = async () => {
    setLoading(true);
    try { 
      const response = await axios.get(`https://kedarling-yatri-niwas-backend.vercel.app/api/rooms/available/${roomType}`);
      setAvailableRooms(response.data);
    } catch (error) {
      console.error('Error fetching available rooms:', error);
    } finally {
      setLoading(false);
    }
  };


  // Add room to selection
const addRoomToSelection = (roomNumber) => {
  const room = availableRooms.find(r => r.roomNumber === roomNumber);
  if (room && !selectedRooms.find(r => r.roomNumber === roomNumber)) {
    setSelectedRooms([...selectedRooms, room]);
  }
};

  // Remove room from selection
 const removeRoomFromSelection = (roomNumber) => {
  setSelectedRooms(selectedRooms.filter(room => room.roomNumber !== roomNumber));
};

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPaymentProof(file);
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };



  // ... (previous imports remain the same)

const handleSubmitBooking = async () => {
  setLoading(true);
  try {
    const formData = new FormData();
    formData.append('customerName', customerName);
    formData.append('customerPhone', customerPhone);
    formData.append('customerEmail', customerEmail || '');
    formData.append('customerAddress', customerAddress || '');
    formData.append('roomType', roomType);
    
    // Send multiple rooms data
    formData.append('selectedRooms', JSON.stringify(selectedRooms));
    formData.append('totalRooms', selectedRooms.length);
    
    formData.append('checkInDate', new Date(checkInDate).toISOString());
    formData.append('checkOutDate', new Date(checkOutDate).toISOString());
    formData.append('arrivalTime', arrivalTime ? new Date(arrivalTime).toISOString() : '');
    
    formData.append('specialRequests', specialRequests || '');
    formData.append('paymentMethod', paymentMethod);
    formData.append('totalAmount', calculateTotal());
    
    if (paymentProof) {
      formData.append('paymentProof', paymentProof);
    }
    
    const response = await axios.post('https://kedarling-yatri-niwas-backend.vercel.app/api/bookings', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    setBookingId(response.data._id);
    setBookingSuccess(true);
    
    if (paymentMethod === 'online' && paymentConfirmed) {
      setPaymentStatus('paid');
    } else {
      setPaymentStatus('pending');
    }
    
    // Show success alert
    alert('Booking confirmed! Confirmation emails have been sent to you and the hotel.');
    
  } catch (error) {
    console.error('Error submitting booking:', error);
    alert('Failed to submit booking. Please check your details and try again.');
  } finally {
    setLoading(false);
  }
};


  const handleCompletePayment = async () => {
    setLoading(true);
    try {
      await axios.put(`https://kedarling-yatri-niwas-backend.vercel.app/api/bookings/${bookingId}/payment`, {
        paymentStatus: 'paid',
        paymentConfirmed: true
      });
      setPaymentStatus('paid');
    } catch (error) {
      console.error('Error completing payment:', error);
    } finally {
      setLoading(false);
    }
  };

const calculateTotal = () => {
  if (!checkInDate || !checkOutDate || selectedRooms.length === 0) return 0;
  
  const days = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
  const totalRoomPrice = selectedRooms.reduce((total, room) => total + room.price, 0);
  return days * totalRoomPrice;
};
  const generateQRCode = () => {
    const upiId = "hotelowner@paytm";
    const amount = calculateTotal();
    const name = "Hotel Booking Payment";
    return `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=Hotel%20Room%20Booking`;
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', mb: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Select Your Perfect Rooms
                    </Typography>
                    <Typography variant="body1">
                      Choose multiple rooms from our premium accommodations
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Room Type</InputLabel>
                  <Select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    label="Room Type"
                  >
                    <MenuItem value="AC">
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>AC Room - Premium Comfort</span>
                        <Chip label="₹2500/night" color="primary" size="small" />
                      </Box>
                    </MenuItem>
                    <MenuItem value="Non-AC">
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>Non-AC Room - Standard</span>
                        <Chip label="₹1800/night" color="secondary" size="small" />
                      </Box>
                    </MenuItem>
                    <MenuItem value="General">
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>General Room - Budget</span>
                        <Chip label="₹1200/night" color="default" size="small" />
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              {roomType && (
                <>
                  <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Check-in Date"
                        value={checkInDate}
                        onChange={(newValue) => setCheckInDate(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                        minDate={new Date()}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Check-out Date"
                        value={checkOutDate}
                        onChange={(newValue) => setCheckOutDate(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                        minDate={checkInDate || new Date()}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        label="Expected Arrival Time"
                        value={arrivalTime}
                        onChange={(newValue) => setArrivalTime(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </>
              )}

              {/* Available Rooms Selection */}
              {availableRooms.length > 0 && (
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Available Rooms - Select Multiple
                      </Typography>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Room Number</TableCell>
                              <TableCell>Price per Night</TableCell>
                              <TableCell>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {availableRooms.map((room) => (
                              <TableRow key={room.roomNumber}>
                                <TableCell>Room {room.roomNumber}</TableCell>
                                <TableCell>₹{room.price}</TableCell>
                                <TableCell>
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<AddIcon />}
                                    onClick={() => addRoomToSelection(room.roomNumber)}
                                    disabled={selectedRooms.find(r => r.roomNumber === room.roomNumber)}
                                  >
                                    {selectedRooms.find(r => r.roomNumber === room.roomNumber) ? 'Selected' : 'Select'}
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              )}

              {/* Selected Rooms Display */}
              {selectedRooms.length > 0 && (
                <Grid item xs={12}>
                  <Card sx={{ bgcolor: 'success.light' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Selected Rooms ({selectedRooms.length})
                      </Typography>
                      <List dense>
                        {selectedRooms.map((room) => (
                          <ListItem key={room.roomNumber}>
                            <ListItemText
                              primary={`Room ${room.roomNumber}`}
                              secondary={`₹${room.price}/night`}
                            />
                            <ListItemSecondaryAction>
                              <IconButton 
                                size="small" 
                                onClick={() => removeRoomFromSelection(room.roomNumber)}
                                color="error"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </List>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">
                          Total per Night: ₹{selectedRooms.reduce((total, room) => total + room.price, 0)}
                        </Typography>
                        <Chip 
                          icon={<HotelIcon />} 
                          label={`${selectedRooms.length} rooms selected`} 
                          color="success" 
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', mb: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Guest Information
                    </Typography>
                    <Typography variant="body1">
                      Please provide your details for the booking
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Full Name"
                  fullWidth
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Address"
                  fullWidth
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Special Requests"
                  fullWidth
                  multiline
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  variant="outlined"
                  placeholder="Any special requirements or requests..."
                />
              </Grid>
              
              {/* Booking Summary */}
              <Grid item xs={12}>
                <Card sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Booking Summary</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography><strong>Rooms:</strong> {selectedRooms.length} rooms</Typography>
                        <Typography><strong>Check-in:</strong> {checkInDate?.toLocaleDateString()}</Typography>
                        <Typography><strong>Check-out:</strong> {checkOutDate?.toLocaleDateString()}</Typography>
                        {arrivalTime && (
                          <Typography><strong>Arrival Time:</strong> {arrivalTime?.toLocaleTimeString()}</Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                          Total Amount: ₹{calculateTotal()}
                        </Typography>
                        <Chip 
                          icon={<MoneyIcon />} 
                          label={`${Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24))} nights`} 
                          color="secondary" 
                        />
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle2" gutterBottom>Selected Rooms:</Typography>
                    {selectedRooms.map((room, index) => (
                      <Chip 
                        key={room.roomNumber}
                        label={`Room ${room.roomNumber} (₹${room.price})`}
                        sx={{ mr: 1, mb: 1 }}
                        color="secondary"
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', mb: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Payment & Confirmation
                    </Typography>
                    <Typography variant="body1">
                      Complete your booking with secure payment
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {!bookingSuccess ? (
                <>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Payment Method</FormLabel>
                      <RadioGroup
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        row
                      >
                        <FormControlLabel value="online" control={<Radio />} label="Online Payment (UPI/Card)" />
                        <FormControlLabel value="cash" control={<Radio />} label="Pay at Hotel (Cash)" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {paymentMethod === 'online' && (
                    <>
                      <Grid item xs={12} md={6}>
                        <Card sx={{ textAlign: 'center', p: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Scan QR Code to Pay
                          </Typography>
                          <Box sx={{ mb: 2 }}>
                            <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(generateQRCode())}`}
                              alt="UPI Payment QR Code" 
                              style={{ maxWidth: '200px', border: '2px solid #ddd', borderRadius: '8px' }}
                            />
                          </Box>
                          <Button
                            variant="outlined"
                            startIcon={<QrIcon />}
                            onClick={() => setQrDialogOpen(true)}
                          >
                            View Full Size QR
                          </Button>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Card sx={{ p: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Upload Payment Proof
                          </Typography>
                          <Button
                            variant="outlined"
                            component="label"
                            startIcon={<UploadIcon />}
                            fullWidth
                            sx={{ mb: 2 }}
                          >
                            Upload Screenshot
                            <input
                              type="file"
                              hidden
                              accept="image/*"
                              onChange={handleFileUpload}
                            />
                          </Button>
                          
                          {paymentProof && (
                            <>
                              <Alert severity="success" sx={{ mb: 2 }}>
                                Payment proof uploaded: {paymentProof.name}
                              </Alert>
                              {uploadProgress < 100 && (
                                <LinearProgress variant="determinate" value={uploadProgress} sx={{ mb: 2 }} />
                              )}
                            </>
                          )}

                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={paymentConfirmed}
                                onChange={(e) => setPaymentConfirmed(e.target.checked)}
                                disabled={!paymentProof}
                              />
                            }
                            label="I have completed the payment"
                          />
                        </Card>
                      </Grid>
                    </>
                  )}

                  <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmitBooking}
                        disabled={
                          loading || 
                          (paymentMethod === 'online' && (!paymentProof || !paymentConfirmed))
                        }
                        sx={{ minWidth: 200 }}
                      >
                        {loading ? 'Processing...' : 'Confirm Booking'}
                      </Button>
                    </Box>
                  </Grid>
                </>
              ) : (
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <CheckIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
                      <Typography variant="h4" gutterBottom color="success.main">
                        Booking Confirmed!
                      </Typography>
                      
                      <Box sx={{ my: 3 }}>
                        <Chip 
                          icon={paymentStatus === 'paid' ? <CheckIcon /> : <PendingIcon />}
                          label={paymentStatus === 'paid' ? 'Payment Complete' : 'Payment Pending'}
                          color={paymentStatus === 'paid' ? 'success' : 'warning'}
                          size="large"
                        />
                      </Box>

                      <Divider sx={{ my: 3 }} />
                      
                      <Box sx={{ textAlign: 'left', maxWidth: 500, mx: 'auto' }}>
                        <Typography variant="h6" gutterBottom>Booking Details:</Typography>
                        <Typography><strong>Guest:</strong> {customerName}</Typography>
                        <Typography><strong>Phone:</strong> {customerPhone}</Typography>
                        <Typography><strong>Room Type:</strong> {roomType}</Typography>
                        <Typography><strong>Total Rooms:</strong> {selectedRooms.length}</Typography>
                        <Typography><strong>Check-in:</strong> {new Date(checkInDate).toLocaleDateString()}</Typography>
                        <Typography><strong>Check-out:</strong> {new Date(checkOutDate).toLocaleDateString()}</Typography>
                        {arrivalTime && (
                          <Typography><strong>Arrival Time:</strong> {new Date(arrivalTime).toLocaleTimeString()}</Typography>
                        )}
                        <Typography variant="h6" sx={{ mt: 2 }}>
                          <strong>Total Amount: ₹{calculateTotal()}</strong>
                        </Typography>
                        
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" gutterBottom>Room Details:</Typography>
                          {selectedRooms.map((room) => (
                            <Chip 
                              key={room.roomNumber}
                              label={`Room ${room.roomNumber} - ₹${room.price}/night`}
                              sx={{ mr: 1, mb: 1 }}
                              color="primary"
                            />
                          ))}
                        </Box>
                      </Box>

                      {paymentStatus === 'pending' && paymentMethod === 'online' && (
                        <Box sx={{ mt: 3 }}>
                          <Alert severity="info" sx={{ mb: 2 }}>
                            Your booking is confirmed. Payment verification is in progress.
                          </Alert>
                          <Button 
                            variant="contained" 
                            onClick={handleCompletePayment}
                            disabled={loading}
                          >
                            {loading ? 'Verifying...' : 'Mark Payment as Complete'}
                          </Button>
                        </Box>
                      )}

                      {paymentMethod === 'cash' && (
                        <Alert severity="warning" sx={{ mt: 2 }}>
                          Please pay ₹{calculateTotal()} at the hotel reception during check-in.
                        </Alert>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Box>
        );

      default:
        return 'Unknown step';
    }
  }

  return (
    <>
    <Header />
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
        

      <Paper elevation={6} sx={{ p: 4, maxWidth: 1000, margin: 'auto', borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4, color: 'primary.main' }}>
          Hotel Room Booking
        </Typography>
        
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

      <div>
          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CheckIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Booking Process Complete!
              </Typography>
              <Typography color="text.secondary">
                Thank you for choosing our hotel. We look forward to hosting you!
              </Typography>
            </Box>
          ) : (
            <div>
              {getStepContent(activeStep)}
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  size="large"
                >
                  Back
                </Button>
                
                {activeStep < steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    size="large"
                    disabled={
                      (activeStep === 0 && (
                        (!roomType || !checkInDate || !checkOutDate) || 
                        (roomsFetched && selectedRooms.length === 0)
                      )) ||
                      (activeStep === 1 && (!customerName || !customerPhone))
                    }
                  >
                    {activeStep === 0 && !roomsFetched ? 'Check Availability' : 'Next'}
                  </Button>
                )}
              </Box>
            </div>
          )}
        </div>

        {/* QR Code Dialog */}
        <Dialog open={qrDialogOpen} onClose={() => setQrDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            UPI Payment QR Code
            <IconButton onClick={() => setQrDialogOpen(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ textAlign: 'center', pb: 3 }}>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(generateQRCode())}`}
              alt="UPI Payment QR Code" 
              style={{ maxWidth: '300px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Amount: ₹{calculateTotal()}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Scan with any UPI app to pay
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
            <Button variant="contained" onClick={() => setQrDialogOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
    <Footer />
    </>
  );
};

export default BookingForm;
