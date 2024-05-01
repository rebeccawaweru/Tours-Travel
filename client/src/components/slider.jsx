import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Box, Container, IconButton, Button } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

const Slider = ({ images, autoSwipeInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Array(images.length).fill(false));

  useEffect(() => {
    const intervalId = setInterval(handleAutoSwipe, autoSwipeInterval);
    return () => clearInterval(intervalId);
  }, [autoSwipeInterval, images.length]);

  const handleSwipe = (deltaX) => {
    if (deltaX > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    }
  };

  const handleAutoSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData.deltaX),
    trackMouse: true
  });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => {
      const newLoadedImages = [...prevLoadedImages];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <Box {...swipeHandlers} sx={{ position: 'relative', overflow: 'hidden', width: "100%" }}>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none', width: '100%' }}>
            <img
              src={image.image}
              alt=""
              onLoad={() => handleImageLoad(index)}
              style={{ display: 'none' }}
            />
            {loadedImages[index] && (
              <Container
              maxWidth
                key={index}
                sx={{
                  paddingTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  color: "whitesmoke",
                  justifyContent: "center",
                  alignItems: "start",
                  width: '100%',
                  height: '100vh',
                  background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${image.image}) no-repeat center center / cover`,
                }}
              >
                {index === currentIndex &&
                  <>
                    <m.h3
                      style={{ fontSize: "25px", color: "#2196f3" }}
                      initial={{ y: "300%" }}
                      animate={{ y: "100%" }}
                      transition={{ delay: 0.5, duration: 1.5 }}
                    >
                      {image.title}
                    </m.h3>
                    <m.h2
                      initial={{ x: "-50%" }}
                      animate={{ x: "0%" }}
                      transition={{ delay: 0.8, duration: 1.5 }}
                      style={{ color: '#818181', fontSize: "40px" }}
                    >
                      {image.caption}
                    </m.h2>
                  </>}
                <Button size="medium" variant="contained" sx={{ width: 250, paddingY: 2 }}>
                  <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/destinations">Learn More</Link>
                </Button>
              </Container>
            )}
          </div>
        ))}
      </div>
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
              backgroundColor: index === currentIndex ? 'whitesmoke' : 'gray',
              margin: '0 4px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <IconButton onClick={nextImage} sx={{ position: 'absolute', right: 0, top: '60%', transform: 'translateY(-50%)', opacity: 0, ':hover': { opacity: 1 } }}>
        <ArrowForwardIos fontSize='large' />
      </IconButton>
      <IconButton size='extralarge' onClick={prevImage} sx={{ position: 'absolute', left: 0, top: '60%', transform: 'translateY(-50%)', opacity: 0, ':hover': { opacity: 1 } }}>
        <ArrowBackIosNew fontSize='large' />
      </IconButton>
    </Box>
  );
};

export default Slider;
