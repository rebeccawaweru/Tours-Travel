import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Box, IconButton, Typography, Stack, Button } from '@mui/material';
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
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${image.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
            {/* Original image */}
            <img
              src={image.image}
              alt={`Image ${index + 1}`}
              style={{
                objectFit: 'cover',
                flexShrink: 0,
                width: '100%',
                maxWidth: '100%',
                height: '100vh',
              }}
            />
        {/* Text overlay */}
          <Stack direction="column" gap={2} sx={{ position: 'absolute', top:{xs:'60%', sm:'60%', md:'60%', lg:'64%', xl:'60%'} , left: {xs:'44%', sm:'38%', md:'32%', lg:'27%', xl:'16%'}, transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
           <Typography variant='h4' fontWeight='medium'>{image.title}</Typography>
           <Typography variant='h2' fontWeight="medium" style={{color:'#818181'}}>{image.caption}</Typography>
           <Typography variant='p' color='inherit'>{image.arr} </Typography>
           <Button size="medium" variant="contained" sx={{width:250, paddingY:2}}>Learn More</Button>
          </Stack>

          </div>
        ))}
      </div>
      {/* Dot indicator */}
      <div style={{ textAlign: 'center', position: 'absolute', right: 0, left: 0, bottom: 0, transform: 'translateY(-50%)' }}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              border: index === currentIndex ? '2px solid white' : 'none',
              backgroundColor: index === currentIndex ? 'whitesmoke' : 'gray', // Active dot color and inactive dot color
              margin: '0 4px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)} // Clicking on the dot to navigate to the corresponding image
          ></span>
        ))}
      </div>
      {/* Next button */}
      <IconButton  onClick={nextImage} sx={{ position: 'absolute', right: 0, top: '60%', transform: 'translateY(-50%)', opacity:0 , ':hover': { opacity: 1 }}}><ArrowForwardIos fontSize='large' /></IconButton>
      {/* Previous button */}
      <IconButton size='extralarge' onClick={prevImage} sx={{ position: 'absolute', left: 0, top: '60%', transform: 'translateY(-50%)', opacity:0, ':hover': { opacity: 1 } }}><ArrowBackIosNew fontSize='large' /></IconButton>
    </Box>
  );
  
  
};

export default Slider;
