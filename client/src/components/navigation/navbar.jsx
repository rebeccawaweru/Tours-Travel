import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, AppBar, Box, Stack, IconButton, Button, Divider, Container} from '@mui/material';
import { X, Instagram, Facebook, Lock, MailOutline, Phone, Person, Menu, GTranslate } from '@mui/icons-material';
import Logo from '../../assets/denze-new.png'
import LinkItem from './linkitem';
import CustomDrawer from './drawer';
import ListItem from './listItem';

export default function NavBar({hideToolbar}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [translate, setTranslate] = useState(false)
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
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   if (!document.getElementById('google_translate_script')) {
  //     var addScript = document.createElement("script");
  //     addScript.id = 'google_translate_script'; // Add an ID to the script element
  //     addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     document.body.appendChild(addScript);
  // }
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
  return (

    <Container  sx={{ flexGrow: 1,position:"relative",background:"transparent"}} >
   
         
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor:hideToolbar ? '#000435' : 'rgba(0, 4, 53, 0.4)', color: "white",  }} elevation={0}>
     
      {/* <div style={{position:"absolute", zIndex:100,left:28}} id="google_translate_element"></div> */}

   
        <Toolbar  sx={{ display: { xs: 'none', md: 'flex'},marginTop:-1}}>
       
          <div id="google_translate_element"></div>
   


          <Stack direction="row" spacing={1} component="div" sx={{ flexGrow: 1 }}>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><Phone sx={{ fontSize: 16, marginRight: 0.8 }} />+254 707 741 232 </IconButton>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><MailOutline  sx={{ fontSize: 16, marginRight: 0.8 }} />info@denzetoursandtravels.com</IconButton>
          </Stack>
          <Box display={{ md:"none",lg:"flex"}}>
          <IconButton><Facebook sx={{ fontSize: 16 }} /></IconButton>
          <a href="https://www.instagram.com/denzetoursandtravels/" target='_blank'><IconButton><Instagram sx={{ fontSize: 16 }} /></IconButton></a>
          <a href='https://twitter.com/DENZETours' target='_blank'><IconButton><X sx={{ fontSize: 16 }} /></IconButton></a>
         
          <Link className='link' to="/signup"><IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Person sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/>Sign up</IconButton></Link>
          </Box>

          <Box>
          <Link className='link' to="/signin"> <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Lock sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/>Login</IconButton></Link>
          </Box>

        </Toolbar>
   

        <Toolbar sx={{marginTop:-1}}>
          <Typography  variant="p" component="div" display="flex" alignItems="center" sx={{ flexGrow: 1}}>
            <img src={Logo} alt="denzetours&travel" width={hideToolbar ? 190 : 230} height={hideToolbar ? 50 : 60} style={{objectFit:"cover"}}/>
            {/* width={240} height={100} */}
        
            {/* {translate && <Typography onClick={()=>setTranslate(false)} marginLeft={2} sx={{cursor:"pointer"}}>Exit</Typography>} */}
          </Typography>

          <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
          <Box width={{sm:"75%", md:"50%"}} justifyContent="space-between" display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
            <LinkItem to="/" page="Home"/>
            <LinkItem to="/about" page="About"/>
            <LinkItem to="/packages" page="Packages"/>
            <LinkItem to="/destinations" page="Destinations"/>
           {/* <LinkItem to="/classes" page="Classes"/> */}
            <LinkItem to="/contact" page="Contact"/>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <CustomDrawer open={openDrawer} onClose={handleDrawerClose}>
        <Stack
           bgcolor="#000435"
           direction="column"
           gap={5}
           sx={{ width: 200,  height:"100vh", paddingTop:4, textAlign:"center" }} // Set color to black
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
         <ListItem to="/" title="Home"/>
         <ListItem to="/about" title="About"/>
         <ListItem to="/packages" title="Packages"/>
         <ListItem to="/destinations" title="Destinations"/>
         <ListItem to="/contact" title="Contact"/>
         <ListItem to="/signup" title="Sign Up"/>
         <ListItem to="/signin" title="Login"/>
        </Stack>
      </CustomDrawer>
    </Container>

  );
}
