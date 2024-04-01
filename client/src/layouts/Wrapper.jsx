import { useEffect,useState } from 'react';
import { NavBar, Footer } from '../components';
import { useLocation } from 'react-router-dom';
export default function Wrapper({children}){
  const location = useLocation()
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

    if(location.pathname !== "/"){
      setHideToolbar(true); // Hide the Toolbar
    }

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);
    return (
        <>
          <NavBar hideToolbar={hideToolbar} />
          {children}
          <Footer/>
        </>
    )
}