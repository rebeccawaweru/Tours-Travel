import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, AppBar, Box, Stack, IconButton, Button, Container} from '@mui/material';
import { X, Instagram, Facebook, Lock, MailOutline, Phone, Person, Menu, GTranslate } from '@mui/icons-material';
import Logo from '../../assets/tour-logo.png'
import LinkItem from './linkitem';
import CustomDrawer from './drawer';
export default function NavBar({hideToolbar}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  // function googleTranslateElementInit() {
  //   new window.google.translate.TranslateElement({pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element')
  // }
  const handleTranslateClick = () => {
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
        // Simulate a click event on the Google Translate dropdown
        const translateDropdown = translateElement.querySelector('.goog-te-menu-value');
        if (translateDropdown) {
            translateDropdown.click();
        }
    }
}
  // useEffect(()=>{
  //   googleTranslateElementInit()
  // },[])
  return (
    <Container sx={{ flexGrow: 1}}>
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor:hideToolbar ? '#000435' : 'rgba(0, 4, 53, 0.4)', color: "white",  }} elevation={0}>
         {!hideToolbar && 
        <Toolbar sx={{ display: { xs: 'none', md: 'flex'} }}>
          <Stack direction="row" spacing={1} component="div" sx={{ flexGrow: 1 }}>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><Phone sx={{ fontSize: 16, marginRight: 0.8 }} />+254 707 741 232 </IconButton>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><MailOutline sx={{ fontSize: 16, marginRight: 0.8 }} />info@denzetoursandtravels.com</IconButton>
            <div style={{position:"relative"}}>
              <div id="google_translate_element" style={{position:"relative",display:"none"}}></div>
              <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><GTranslate color='primary' sx={{ fontSize: 16, marginRight: 0.8 }} />Translate</IconButton>

            </div>
          </Stack>
          <Box display={{xs:'none',sm:"none", md:"flex"}}>
          <IconButton><Facebook sx={{ fontSize: 16 }} /></IconButton>
          <IconButton><Instagram sx={{ fontSize: 16 }} /></IconButton>
          <IconButton><X sx={{ fontSize: 16 }} /></IconButton>
          <Link className='link' to="/signup"><IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Person sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/>Sign up</IconButton></Link>
          </Box>
          <Link className='link' to="/signin"> <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Lock sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/>Login</IconButton></Link>
        </Toolbar>}

        <Toolbar>
          <Typography  variant="p" component="div" sx={{ flexGrow: 1,paddingY:{xs:2,sm:2,md:0}}}>
            <img src={Logo} alt="denzetours&travel" width={hideToolbar ? 150 : 185} height={hideToolbar ? 80 : 75} style={{objectFit:"cover"}}/>
          
          </Typography>
          <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
          <Box width={{sm:"75%", md:"50%"}} justifyContent="space-between" display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
            <LinkItem to="/" page="Home"/>
            <LinkItem to="/about" page="About"/>
            <LinkItem to="/packages" page="Packages"/>
            <LinkItem to="/destinations" page="Destinations"/>
           <LinkItem to="/class" page="Class"/>
            <LinkItem to="/contact" page="Contact"/>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <CustomDrawer open={openDrawer} onClose={handleDrawerClose}>
        <Stack
           direction="column"
           gap={10}
           sx={{ width: 200,  height:"100vh", paddingTop:4, textAlign:"center" }} // Set color to black
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
   
         <Link style={{textDecoration:"none"}} to="/">Home</Link>
         <Link style={{textDecoration:"none"}} to="/about">About</Link>
         {/* <Link style={{textDecoration:"none"}} to="/">Services</Link> */}
         <Link style={{textDecoration:"none"}} to="/packages">Packages</Link>
         <Link style={{textDecoration:"none"}} to="/destinations">Destinations</Link>
         <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
         <Link style={{textDecoration:"none"}} to="/signup">Sign Up</Link>
         <Link style={{textDecoration:"none"}} to="/signin">Login</Link>
        </Stack>
      </CustomDrawer>
    </Container>
  );
}
