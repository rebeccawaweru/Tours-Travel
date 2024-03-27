import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, Box, AppBar, MenuItem, Stack, IconButton, Drawer, Divider } from '@mui/material';
import { X, Instagram, Facebook, Lock, MailOutline, Phone, Person, Menu } from '@mui/icons-material';

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: "white", paddingX: { xs: 0, sm: 4, md: 0, lg: 4, xl: 8 } }} elevation={0}>
        <Toolbar sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>
          <Stack direction="row" spacing={4} component="div" sx={{ flexGrow: 1 }}>
            <IconButton sx={{ fontSize: 14 }}><Phone sx={{ fontSize: 16, marginRight: 0.8 }} />+254 726 647 255</IconButton>
            <IconButton sx={{ fontSize: 14 }}><MailOutline sx={{ fontSize: 16, marginRight: 0.8 }} />contact@denzetoursandtravels.com</IconButton>
          </Stack>

          <IconButton><Facebook sx={{ fontSize: 16 }} /></IconButton>
          <IconButton><Instagram sx={{ fontSize: 16 }} /></IconButton>
          <IconButton><X sx={{ fontSize: 16 }} /></IconButton>
          <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Lock sx={{ fontSize: 16, marginRight: 0.8 }} color='primary' />Login</IconButton>
          <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Person sx={{ fontSize: 16, marginRight: 0.8 }} color='primary' />Sign up</IconButton>
        </Toolbar>

        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            DENZE TOURS & TRAVELS
          </Typography>
          <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
          <Stack direction="row" sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
            <MenuItem><Link className='link' to="/">Home</Link></MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem><Link className='link' to="/">Packages</Link></MenuItem>
            <MenuItem>Destinations</MenuItem>
            <MenuItem><Link className='link' to="/">Contact</Link></MenuItem>
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
         <Link style={{textDecoration:"none"}} to="/">About</Link>
         <Link style={{textDecoration:"none"}} to="/">Services</Link>
         <Link style={{textDecoration:"none"}} to="/">Packages</Link>
         <Link style={{textDecoration:"none"}} to="/">Destinations</Link>
         <Link style={{textDecoration:"none"}} to="/">Contact</Link>
         <Link style={{textDecoration:"none"}} to="/">Sign Up</Link>
         <Link style={{textDecoration:"none"}} to="/">Login</Link>
        </Stack>
      </Drawer>
    </Box>
  );
}
