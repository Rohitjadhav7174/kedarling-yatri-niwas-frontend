import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Paper,
  TextField,
  Chip,
  LinearProgress,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  Alert,
  Snackbar,
  IconButton,
  Dialog,
  DialogContent,
  useMediaQuery
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ChevronLeft, ChevronRight, Close, Circle } from '@mui/icons-material';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

// Hardcoded image paths for each room
const localRoomImages = {
  // Suite AC Rooms
  'Suite AC 1': ['/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg', '/uploads/Suit8.jpeg'],
  'Suite AC 2': ['/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg'],
  'Suite AC 3': ['/uploads/Suite3.jpeg', '/uploads/Suite3.jpeg', '/uploads/Suite3.jpeg'],
  'Suite AC 4': ['/uploads/Suit4.jpeg', '/uploads/Suit4.jpeg', '/uploads/Suit4.jpeg'],
  'Suite AC 5': ['/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg'],
  'Suite AC 6': ['/uploads/Suite6.jpeg', '/uploads/Suite6.jpeg', '/uploads/Suite6.jpeg'],
  'Suite AC 7': ['/uploads/Suite7.jpeg', '/uploads/Suite7.jpeg', '/uploads/Suite7.jpeg'],
  'Suite AC 8': ['/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg'],
  
  // Suite Non-AC Rooms
  'Suite Non-AC 1': ['/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg'],
  'Suite Non-AC 2': ['/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg'],
  'Suite Non-AC 3': ['/uploads/Suite3.jpeg', '/uploads/Suite3.jpeg', '/uploads/Suite3.jpeg'],
  'Suite Non-AC 4': ['/uploads/Suit4.jpeg', '/uploads/Suit4.jpeg', '/uploads/Suit4.jpeg'],
  'Suite Non-AC 5': ['/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg', '/uploads/Suite2.jpeg'],
  'Suite Non-AC 6': ['/uploads/Suite6.jpeg', '/uploads/Suite6.jpeg', '/uploads/Suite6.jpeg'],
  'Suite Non-AC 7': ['/uploads/Suite7.jpeg', '/uploads/Suite7.jpeg', '/uploads/Suite7.jpeg'],
  'Suite Non-AC 8': ['/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg', '/uploads/Suite8.jpeg'],
  
  // Standard AC Rooms
  '101': ['/uploads/g1.jpeg', '/uploads/g1.jpeg', '/uploads/g1.jpeg'],
  '102': ['/uploads/g2.jpeg', '/uploads/g2.jpeg', '/uploads/g2.jpeg'],
  '108': ['/uploads/g3.jpeg', '/uploads/g3.jpeg', '/uploads/g3.jpeg'],
  '109': ['/uploads/g4.jpeg', '/uploads/g4.jpeg', '/uploads/g4.jpeg'],
  '110': ['/uploads/g2.jpeg', '/uploads/g2.jpeg', '/uploads/g5.jpeg'],
  '111': ['/uploads/g1.jpeg', '/uploads/g1.jpeg', '/uploads/g6.jpeg'],
  
  // Standard Non-AC Rooms
  '103': ['/uploads/g1.jpeg', '/uploads/g1.jpeg', '/uploads/g1.jpeg'],
  '104': ['/uploads/g2.jpeg', '/uploads/g2.jpeg', '/uploads/g2.jpeg'],
  '105': ['/uploads/g3.jpeg', '/uploads/g3.jpeg', '/uploads/g3.jpeg'],
  '106': ['/uploads/g4.jpeg', '/uploads/g4.jpeg', '/uploads/g4.jpeg'],
  '117': ['/uploads/g2.jpeg', '/uploads/g2.jpeg', '/uploads/g5.jpeg'],

  // Standard General Rooms

    '112': ['/uploads/g1.jpeg', '/uploads/g1.jpeg', '/uploads/g1.jpeg'],
  '113': ['/uploads/g2.jpeg', '/uploads/g2.jpeg', '/uploads/g2.jpeg'],
  '114': ['/uploads/g3.jpeg', '/uploads/g3.jpeg', '/uploads/g3.jpeg'],
  '115': ['/uploads/g4.jpeg', '/uploads/g4.jpeg', '/uploads/g4.jpeg'],
  '116': ['/uploads/g2.jpeg', '/uploads/g2.jpeg', '/uploads/g5.jpeg'],
  '117': ['/uploads/g1.jpeg', '/uploads/g1.jpeg', '/uploads/g6.jpeg'],
};

// Fallback images in case local images don't load
const fallbackImages = {
  suite: {
    ac: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    nonAc: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80'
  },
  standard: {
    ac: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80',
    nonAc: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhovdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    general: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  }
};

const roomCategories = [
  {
    category: "Suite",
    description: "Luxurious suites with premium amenities",
    image: fallbackImages.suite.ac,
    roomTypes: [
      {
        type: "AC",
        description: "Air-conditioned suites with premium amenities",
        basePrice: 2000,
        capacity: 3,
        amenities: ['AC', 'TV', 'WiFi', 'Attached Bathroom', 'Mini Bar', 'Sofa']
      },
      {
        type: "Non-AC",
        description: "Comfortable rooms with suites amenities",
        basePrice: 1500,
        capacity: 3,
        amenities: ['Fan', 'TV', 'WiFi', 'Attached Bathroom', 'Mini Bar', 'Sofa']
      },
    ]
  },
  {
    category: "Standard",
    description: "Comfortable standard rooms",
    image: fallbackImages.standard.ac,
    roomTypes: [
      {
        type: "AC",
        description: "Air-conditioned rooms with premium amenities",
        basePrice: 1200,
        capacity: 2,
        amenities: ['AC', 'TV', 'WiFi', 'Attached Bathroom']
      },
      {
        type: "Non-AC",
        description: "Comfortable rooms with standard amenities",
        basePrice: 1000,
        capacity: 2,
        amenities: ['Fan', 'TV', 'Attached Bathroom']
      },
      {
        type: "General",
        description: "Budget-friendly rooms with basic amenities",
        basePrice: 1000,
        capacity: 4,
        amenities: ['Fan', 'Shared Bathroom']
      }
    ]
  }
];

// Image Carousel Component
const ImageCarousel = ({ images, roomNumber, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleImageError = () => {
    setError(true);
  };

  // Get fallback image based on room type
  const getFallbackImage = () => {
    if (roomNumber.includes('Suite')) {
      return roomNumber.includes('Non-AC') ? fallbackImages.suite.nonAc : fallbackImages.suite.ac;
    } else {
      if (roomNumber === '112' || roomNumber === '113' || roomNumber === '114' || 
          roomNumber === '115' || roomNumber === '116' || roomNumber === '117') {
        return fallbackImages.standard.general;
      } else if (roomNumber === '103' || roomNumber === '104' || roomNumber === '105' || 
                 roomNumber === '106' || roomNumber === '107') {
        return fallbackImages.standard.nonAc;
      } else {
        return fallbackImages.standard.ac;
      }
    }
  };

  return (
    <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="240"
        image={error ? getFallbackImage() : images[currentIndex]}
        alt={`Room ${roomNumber} - Image ${currentIndex + 1}`}
        onClick={onImageClick}
        onError={handleImageError}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            cursor: 'pointer'
          },
        }}
      />
      
      {images.length > 1 && !error && (
        <>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            size="small"
          >
            <ChevronLeft />
          </IconButton>
          
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            size="small"
          >
            <ChevronRight />
          </IconButton>
          
          <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
            {images.map((_, index) => (
              <Circle
                key={index}
                onClick={(e) => handleDotClick(e, index)}
                sx={{
                  fontSize: 8,
                  color: index === currentIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
                  margin: '0 2px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

// Image Modal Component
const ImageModal = ({ open, onClose, images, roomNumber }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(images.map(() => false));
  const fullScreen = useMediaQuery('(max-width:600px)');

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageError = (index) => {
    const newError = [...error];
    newError[index] = true;
    setError(newError);
  };

  // Get fallback image based on room type
  const getFallbackImage = () => {
    if (roomNumber.includes('Suite')) {
      return roomNumber.includes('Non-AC') ? fallbackImages.suite.nonAc : fallbackImages.suite.ac;
    } else {
      if (roomNumber === '112' || roomNumber === '113' || roomNumber === '114' || 
          roomNumber === '115' || roomNumber === '116' || roomNumber === '117') {
        return fallbackImages.standard.general;
      } else if (roomNumber === '103' || roomNumber === '104' || roomNumber === '105' || 
                 roomNumber === '106' || roomNumber === '107') {
        return fallbackImages.standard.nonAc;
      } else {
        return fallbackImages.standard.ac;
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
    >
      <DialogContent sx={{ position: 'relative', p: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <Close />
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            size="large"
          >
            <ChevronLeft />
          </IconButton>
          
          <Box 
            component="img"
            src={error[currentIndex] ? getFallbackImage() : images[currentIndex]}
            alt={`Room ${roomNumber} - Image ${currentIndex + 1}`}
            onError={() => handleImageError(currentIndex)}
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
          
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            size="large"
          >
            <ChevronRight />
          </IconButton>
        </Box>
        
        <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
          {images.map((_, index) => (
            <Circle
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                fontSize: 10,
                color: index === currentIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
                margin: '0 4px',
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const RoomCard = () => {
  const theme = useTheme();
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    checkIn: null,
    checkOut: null
  });
  const [selectedCategory, setSelectedCategory] = useState('Suite');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomImages, setSelectedRoomImages] = useState([]);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSelectedCategory(newValue === 0 ? 'Suite' : 'Standard');
    setSelectedRoomType('');
    setAvailableRooms([]);
  };

  const fetchAvailableRooms = async () => {
    if (!selectedCategory || !selectedRoomType || !selectedDates.checkIn || !selectedDates.checkOut) return;
    
    setLoading(true);
    try {
      const response = await axios.get('https://kedarling-yatri-niwas-backend.vercel.app/api/rooms/available', {
        params: {
          checkIn: selectedDates.checkIn.toISOString(),
          checkOut: selectedDates.checkOut.toISOString(),
          category: selectedCategory,
          type: selectedRoomType
        }
      });
      setAvailableRooms(response.data);
    } catch (error) {
      console.error('Error fetching available rooms:', error);
      setError('Failed to fetch available rooms. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (room) => {
    navigate('/HotelBookingForm', {
      state: {
        selectedRoom: room,
        checkInDate: selectedDates.checkIn,
        checkOutDate: selectedDates.checkOut
      }
    });
  };

  // Function to get the correct image URLs using hardcoded paths
  const getRoomImages = (room) => {
    // Use localRoomImages mapping
    if (localRoomImages[room.roomNumber]) {
      return localRoomImages[room.roomNumber];
    }
    
    // Fallback based on room category and type
    if (room.roomCategory === 'Suite') {
      return room.type === 'AC' ? [fallbackImages.suite.ac] : [fallbackImages.suite.nonAc];
    } else {
      if (room.type === 'AC') {
        return [fallbackImages.standard.ac];
      } else if (room.type === 'Non-AC') {
        return [fallbackImages.standard.nonAc];
      } else {
        return [fallbackImages.standard.general];
      }
    }
  };

  const handleImageClick = (room) => {
    setSelectedRoomImages(getRoomImages(room));
    setSelectedRoomNumber(room.roomNumber);
    setModalOpen(true);
  };

  const handleCloseError = () => {
    setError('');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          {/* Error Snackbar */}
          <Snackbar 
            open={!!error} 
            autoHideDuration={6000} 
            onClose={handleCloseError}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>

          {/* Image Modal */}
          <ImageModal
            open={modalOpen}
            onClose={handleCloseModal}
            images={selectedRoomImages}
            roomNumber={selectedRoomNumber}
          />

          {/* Category Tabs */}
          <Paper elevation={3} sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Suite Rooms" />
              <Tab label="Standard Rooms" />
            </Tabs>
          </Paper>

          {/* Room Category Info */}
          <Paper elevation={3} sx={{ mb: 4, p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <CardMedia
                component="img"
                image={roomCategories[activeTab].image}
                alt={roomCategories[activeTab].category}
                sx={{ width: 150, height: 100, borderRadius: 2, mr: 3, objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = roomCategories[activeTab].category === 'Suite' ? 
                    fallbackImages.suite.ac : fallbackImages.standard.ac;
                }}
              />
              <Box>
                <Typography variant="h5" gutterBottom>
                  {roomCategories[activeTab].category} Rooms
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {roomCategories[activeTab].description}
                </Typography>
              </Box>
            </Box>

            {/* Date and Room Type Selection */}
            <Typography variant="h6" gutterBottom>
              Select Your Dates and Room Type
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Check-in Date"
                    value={selectedDates.checkIn}
                    onChange={(date) => setSelectedDates({...selectedDates, checkIn: date})}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    minDate={new Date()}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Check-out Date"
                    value={selectedDates.checkOut}
                    onChange={(date) => setSelectedDates({...selectedDates, checkOut: date})}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    minDate={selectedDates.checkIn || new Date()}
                    disabled={!selectedDates.checkIn}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Room Type</InputLabel>
                  <Select
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                    label="Room Type"
                  >
                    <MenuItem value="">
                      <em>Select Room Type</em>
                    </MenuItem>
                    {roomCategories[activeTab].roomTypes.map((type) => (
                      <MenuItem key={type.type} value={type.type}>
                        {type.type} (₹{type.basePrice}/night)
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={fetchAvailableRooms}
                  disabled={!selectedRoomType || !selectedDates.checkIn || !selectedDates.checkOut}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Check Availability
                </Button>
              </Grid>
            </Grid>
          </Paper>

          {/* Available Rooms */}
          {loading ? (
            <LinearProgress />
          ) : availableRooms.length > 0 ? (
            <Box>
              <Typography variant="h4" sx={{ mb: 3, color: theme.palette.primary.main }}>
                Available {selectedCategory} - {selectedRoomType} Rooms
              </Typography>
              <Grid container spacing={4}>
                {availableRooms.map((room) => {
                  const roomImages = getRoomImages(room);
                  return (
                    <Grid item xs={12} sm={6} md={4} key={room.roomNumber}>
                      <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
                        <Card>
                          <ImageCarousel 
                            images={roomImages} 
                            roomNumber={room.roomNumber}
                            onImageClick={() => handleImageClick(room)}
                          />
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              Room {room.roomNumber}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              {room.amenities.join(', ')}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                              <Typography variant="body1">
                                ₹{room.price}/night
                              </Typography>
                              <Chip 
                                label="Available" 
                                color="success" 
                                size="small"
                              />
                            </Box>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              onClick={() => handleBookNow(room)}
                              sx={{
                                fontWeight: 600,
                                "&:hover": {
                                  transform: "translateY(-2px)",
                                  boxShadow: 2,
                                },
                                transition: "all 0.3s ease",
                              }}
                            >
                              Book Now
                            </Button>
                          </CardContent>
                        </Card>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          ) : (
            selectedRoomType && selectedDates.checkIn && selectedDates.checkOut && !loading && (
              <Typography variant="h6" textAlign="center" sx={{ py: 4 }}>
                No available {selectedCategory} - {selectedRoomType} rooms for the selected dates.
              </Typography>
            )
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default RoomCard;