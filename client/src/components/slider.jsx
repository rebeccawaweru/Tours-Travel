import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
const Slider = ({ images, autoSwipeInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle swipe
  const handleSwipe = (deltaX) => {
    if (deltaX > 0) {
      // Swiping right (previous image)
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      // Swiping left (next image)
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    }
  };

  // Function to handle automatic swipe
  const handleAutoSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Effect to start automatic swiping
  useEffect(() => {
    const intervalId = setInterval(handleAutoSwipe, autoSwipeInterval);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [autoSwipeInterval, images.length]);

  // Swipeable hook configuration
  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData.deltaX),
    trackMouse: true // Enable swipe detection with mouse as well
  });

  // Function to handle navigation to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle navigation to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box {...swipeHandlers} sx={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              objectFit:"cover",
              flexShrink: 0,
              width: '100%',
              maxWidth: '100%',
              height: '100vh',
              display: index === currentIndex ? 'block' : 'none' // Show only the current image
            }}
          />
        ))}
      </div>
      {/* Next button */}
      <IconButton onClick={nextImage} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}><ArrowForwardIos fontSize='large'/></IconButton>
      {/* Previous button */}
      <IconButton size='extralarge' onClick={prevImage} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}><ArrowBackIosNew fontSize='large'/></IconButton>
    </Box>
  );
};

export default Slider;
