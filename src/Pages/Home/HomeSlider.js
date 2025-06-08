import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ArrowForward, PlayArrow, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import HomeImg from "./home.png"
import Rankala from "../../Assets/Rankala.png"
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
const HomeSlider = () => {

   const [formData, setFormData] = React.useState({
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0'
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/HotelBookingForm'); // replace with your actual route
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: HomeImg,
      title: "Kedarling Yatri Nivas",
      subtitle: "Experience Luxury & Comfort",
      description: "Discover exceptional hospitality in the heart of Kolhapur since 1955"
    },
    {
      image: Rankala,
      title: "Luxurious Accommodations",
      subtitle: "Your Perfect Retreat",
      description: "Elegantly designed rooms with modern amenities and timeless comfort"
    },
    
  ];

  const GlassBox = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)', // Safari support
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  padding: theme.spacing(3, 1),
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 9),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    fontSize: '0.875rem',
    gap: '0.5em', 
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
        marginBottom: theme.spacing(1), // 👈 adds gap between label and input

    
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fbbf24', // yellow-400
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #d97706', // yellow-600
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    padding: theme.spacing(1.5, 2),
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fbbf24',
  },
  '& .MuiSelect-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #d97706',
    },
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1.5, 2),
  },
  '& .MuiSelect-icon': {
    color: 'white',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#d97706', // yellow-600
  color: 'black',
  fontWeight: 600,
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  padding: theme.spacing(2, 3),
  transition: 'all 0.3s ease',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#b45309', // yellow-700
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };
  const navigate = useNavigate();

  return (

    
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
          zIndex: 2,
        }
      }}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateX(${(index - currentSlide) * 100}%)`,
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
          }}
        />
      ))}

      {/* Content Overlay */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: '600px',
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                display: index === currentSlide ? 'block' : 'none',
                animation: index === currentSlide ? 'fadeInUp 1s ease-out' : 'none',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#f8f9fa',
                  mb: 2,
                  opacity: 0.9,
                }}
              >
                {slide.subtitle}
              </Typography>
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 300,
                  lineHeight: 1.1,
                  mb: 3,
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                {slide.title}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6,
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '500px',
                }}
              >
                {slide.description}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                
                
                
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

       <Box
      sx={{
        position: 'absolute',
        bottom: { xs: '20px', md: '40px' },
        top:'700px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: { xs: '90%', md: '90%', lg: '1200px' },
        zIndex: 10,
        px: { xs: 2, md: 0 }
      }}
    >
      <GlassBox elevation={0}>
        <Grid container spacing={3} alignItems="flex-end">
          {/* Check In */}
          <Grid item xs={12} md={2.4}>
            <StyledTextField
              fullWidth
              type="date"
              label="Check In"
              value={formData.checkIn}
              onChange={handleChange('checkIn')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Check Out */}
          <Grid item xs={12} md={2.4}>
            <StyledTextField
              fullWidth
              type="date"
              label="Check Out"
              value={formData.checkOut}
              onChange={handleChange('checkOut')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Adults */}
          <Grid item xs={12} md={2.4}>
            <StyledFormControl fullWidth>
              <InputLabel>Adults</InputLabel>
              <Select
                value={formData.adults}
                onChange={handleChange('adults')}
                label="Adults"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: '#374151', // gray-800
                      '& .MuiMenuItem-root': {
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5+</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>

          {/* Children */}
          <Grid item xs={12} md={2.4}>
            <StyledFormControl fullWidth>
              <InputLabel>Children</InputLabel>
              <Select
                value={formData.children}
                onChange={handleChange('children')}
                label="Children"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: '#374151', // gray-800
                      '& .MuiMenuItem-root': {
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4+</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>

          {/* Check Availability Button */}
          <Grid item xs={12} md={2.4}>
            <StyledButton
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ height: '56px' }} // Match input height
            >
              Check Availability
            </StyledButton>
          </Grid>
        </Grid>
      </GlassBox>
    </Box>


      {/* Navigation Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: { xs: '10px', md: '30px' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          color: 'white',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            transform: 'translateY(-50%) scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: { xs: '10px', md: '30px' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          color: 'white',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            transform: 'translateY(-50%) scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowRight fontSize="large" />
      </IconButton>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 4,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: currentSlide === index ? '40px' : '12px',
              height: '4px',
              backgroundColor: currentSlide === index ? '#d4af37' : 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: currentSlide === index ? '#d4af37' : 'rgba(255,255,255,0.8)',
              },
            }}
          />
        ))}
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: { xs: '20px', md: '40px' },
          zIndex: 4,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            opacity: 0.7,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          Scroll Down
        </Typography>
        <Box
          sx={{
            width: '1px',
            height: '60px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            margin: '10px auto',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '20px',
              backgroundColor: '#d4af37',
              animation: 'scrollIndicator 2s ease-in-out infinite',
            },
          }}
        />
      </Box>

      {/* Custom Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap');
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scrollIndicator {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(20px);
              opacity: 0.5;
            }
            100% {
              transform: translateY(40px);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HomeSlider;