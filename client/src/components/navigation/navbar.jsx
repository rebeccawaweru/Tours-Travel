import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, AppBar, Box, Stack, IconButton, Drawer, Container} from '@mui/material';
import { X, Instagram, Facebook, Lock, MailOutline, Phone, Person, Menu } from '@mui/icons-material';
import Logo from '../../assets/tour-logo.png'
import LinkItem from './linkitem';
export default function NavBar({hideToolbar}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Container sx={{ flexGrow: 1}}>
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor:hideToolbar ? 'black' : 'rgba(0, 0, 0, 0.6)', color: "white",  }} elevation={0}>
         {!hideToolbar && 
        <Toolbar sx={{ display: { xs: 'none', md: 'flex'} }}>
          <Stack direction="row" spacing={1} component="div" sx={{ flexGrow: 1 }}>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><Phone sx={{ fontSize: 16, marginRight: 0.8 }} />+254 726 647 255</IconButton>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><MailOutline sx={{ fontSize: 16, marginRight: 0.8 }} />info@denzetoursandtravels.com</IconButton>
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
          <Typography variant="p" component="div" sx={{ flexGrow: 1,paddingY:{xs:2,sm:2,md:0}}}>
            <img src={Logo} alt="denzetours&travel" width={hideToolbar ? 150 : 185} height={hideToolbar ? 80 : 75} style={{objectFit:"cover"}}/>
          </Typography>
          <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
          <Box width={{sm:"75%", md:"50%"}} justifyContent="space-between" display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
            <LinkItem to="/" page="Home"/>
            <LinkItem to="/about" page="About"/>
            {/* <LinkItem to="/" page="Services"/> */}
            <LinkItem to="/packages" page="Packages"/>
            <LinkItem to="/destinations" page="Destinations"/>
            <LinkItem to="/contact" page="Contact"/>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer  anchor="right" open={openDrawer} onClose={handleDrawerClose}>
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
      </Drawer>
    </Container>
  );
}
