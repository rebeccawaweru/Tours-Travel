import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar, Box, AppBar, MenuItem, Stack,IconButton } from '@mui/material';
import {X,Instagram,Facebook,Lock, MailOutline,Phone, Person} from '@mui/icons-material';
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor: 'rgba(0, 0, 0.8, 0.6)', color:"white"}} elevation={0}>
        <Toolbar>
        <Stack direction="row" spacing={4} component="div" sx={{flexGrow:1}}>
        <IconButton  sx={{fontSize:14}}><Phone sx={{fontSize:16,marginRight:0.8}}/>+254 726 647 255</IconButton>
         <IconButton sx={{fontSize:14}}><MailOutline sx={{fontSize:16,marginRight:0.8}}/>contact@denzetoursandtravels.com</IconButton>
        </Stack>
        <IconButton><Facebook sx={{fontSize:16}} /></IconButton>
        <IconButton><Instagram sx={{fontSize:16}} /></IconButton>
        <IconButton><X sx={{fontSize:16}} /></IconButton>
        <IconButton sx={{fontSize:14, fontWeight:"bold"}}><Lock sx={{fontSize:16,marginRight:0.8}} color='primary'/>Login</IconButton>
        <IconButton sx={{fontSize:14, fontWeight:"bold"}}><Person sx={{fontSize:16,marginRight:0.8}} color='primary'/>Sign up</IconButton>
        </Toolbar>


        <Toolbar>         
          <Typography variant="p" component="div" sx={{ flexGrow: 1, marginLeft:2 }}>
            DENZE TOURS & TRAVELS
          </Typography>
            <MenuItem><Link className='link' to="/">Home</Link></MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem><Link className='link' to="/">Packages</Link></MenuItem>
            <MenuItem>Destinations</MenuItem>
            <MenuItem><Link className='link' to="/">Contact</Link></MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}