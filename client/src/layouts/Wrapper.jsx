import { useEffect,useState } from 'react';
import { NavBar, Footer } from '../components';
import {Box} from '@mui/material';
import LanguageSelector from '../components/languageselector';
export default function Wrapper({children,data}){
  const [hideToolbar, setHideToolbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled vertically down the page
      if (window.scrollY > 0) {
        setHideToolbar(true); // Hide the Toolbar
      } else {
        setHideToolbar(false); // Show the Toolbar
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);
  
    return (
        <Box maxWidth width="100%" >
          <NavBar hideToolbar={hideToolbar} />
  
          {children}
          <Footer/>
        </Box>
    )
}