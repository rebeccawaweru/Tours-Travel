import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, AppBar, MenuItem, Stack, IconButton, Drawer, Container} from '@mui/material';
import { X, Instagram, Facebook, Lock, MailOutline, Phone, Person, Menu } from '@mui/icons-material';
import Logo from '../../assets/logodenze.png'
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
        <Toolbar sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>
          <Stack direction="row" spacing={4} component="div" sx={{ flexGrow: 1 }}>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><Phone sx={{ fontSize: 16, marginRight: 0.8 }} />+254 726 647 255</IconButton>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><MailOutline sx={{ fontSize: 16, marginRight: 0.8 }} />info@denzetoursandtravels.com</IconButton>
          </Stack>

          <IconButton><Facebook sx={{ fontSize: 16 }} /></IconButton>
          <IconButton><Instagram sx={{ fontSize: 16 }} /></IconButton>
          <IconButton><X sx={{ fontSize: 16 }} /></IconButton>
          <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Lock sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/><Link className='link' to="/signin">Login</Link></IconButton>
          <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Person sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/><Link className='link' to="/signup">Sign up</Link></IconButton>
        </Toolbar>}

        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1,}}>
            <img src={Logo} alt="denzetours&travel" width={hideToolbar ? 85 : 110} height={hideToolbar ? 80 : 90} style={{objectFit:"cover"}}/>
          </Typography>
          <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
          <Stack direction="row" sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
            <MenuItem component={Link} to="/" sx={{'&:hover':{scale:"110%", backgroundColor:"#2196f3", color:"whitesmoke"}, color:"#2196f3"}}>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem><Link className='link' to="/packages">Packages</Link></MenuItem>
            <MenuItem>Destinations</MenuItem>
            <MenuItem><Link className='link' to="/contact">Contact</Link></MenuItem>
          </Stack>
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
         <Link style={{textDecoration:"none"}} to="/services">Services</Link>
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
