// Update SuiteGallery.js to handle image URLs properly
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Chip
} from '@mui/material';
import {
  Close as CloseIcon,
  NavigateBefore as PrevIcon,
  NavigateNext as NextIcon
} from '@mui/icons-material';

const SuiteGallery = ({ images, roomNumber, open, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ position: 'relative', p: 0 }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 10,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ position: 'relative' }}>
          <img
            src={images[currentImageIndex]}
            alt={`Suite ${roomNumber}`}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.src = './public/images/suites/Suit4 .jpeg'; // Add a fallback image
            }}
          />
          
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <PrevIcon />
              </IconButton>
              
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <NextIcon />
              </IconButton>
            </>
          )}
        </Box>

        <Box sx={{ p: 2 }}>
          <Chip 
            label={`Suite ${roomNumber}`}
            color="primary"
            sx={{ mb: 1 }}
          />
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', py: 1 }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: '80px',
                  height: '60px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: index === currentImageIndex ? '3px solid #1976d2' : '1px solid #ddd',
                  borderRadius: '4px'
                }}
                onError={(e) => {
                  e.target.src = '/images/fallback-thumbnail.jpg';
                }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SuiteGallery;