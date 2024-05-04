import React, {useState, useContext} from 'react';
import { Link} from 'react-router-dom';
import { Typography, Toolbar,  AppBar, Box, Stack, IconButton, Container} from '@mui/material';
import { X, Instagram, Facebook, Lock, MailOutline, Phone, Person, Menu, Star } from '@mui/icons-material';
import LinkItem from './linkitem';
import CustomDrawer from './drawer';
import ListItem from './listItem';
import LanguageSelector from '../languageselector';
import {motion as m} from 'framer-motion' 
import { useTranslation } from 'react-i18next';
import CurrencySelector from '../currencyselector';
export default function NavBar({hideToolbar}) {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <Container  sx={{ flexGrow: 1,position:"relative",background:"transparent"}} > 
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor:hideToolbar ? '#000435' : 'rgba(0, 4, 53, 0.4)', color: "white",  }} elevation={0}> 
        <Toolbar  sx={{ display: { xs: 'none', md: 'flex'},marginTop:-1}}>    
          <Stack direction="row" spacing={1} component="div" sx={{ flexGrow: 1 }}>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><Phone sx={{ fontSize: 16, marginRight: 0.8 }} />+254 707 741 232 </IconButton>
            <IconButton sx={{ fontSize: 14, letterSpacing:1 }}><MailOutline  sx={{ fontSize: 16, marginRight: 0.8 }} />info@denzetoursandtravels.com</IconButton>
            <CurrencySelector/>
            <LanguageSelector/>
          </Stack>
          <Box display={{ md:"none",lg:"flex"}}>
          <IconButton><Facebook sx={{ fontSize: 16 }} /></IconButton>
          <a href="https://www.instagram.com/denzetoursandtravels" rel="noreferrer" target='_blank'><IconButton><Instagram sx={{ fontSize: 16 }} /></IconButton></a>
          <a href='https://twitter.com/DENZETours' rel="noreferrer" target='_blank'><IconButton><X sx={{ fontSize: 16 }} /></IconButton></a>
          <Link className='link' to="/signup"><IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Person sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/>{t('navbar.signup')}</IconButton></Link>
          </Box>
          <Box>
          <Link className='link' to="/signin"> <IconButton sx={{ fontSize: 14, fontWeight: "bold" }}><Lock sx={{ fontSize: 16, marginRight: 0.8 }} color='primary'/>{t('navbar.signin')}</IconButton></Link>
          </Box>
        </Toolbar>
        <Toolbar>
        <Typography  variant="p" component="div" display="flex" alignItems="center" sx={{ flexGrow: 1, paddingY:{xs:1,md:0}}}>
            <img src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/denze-new_rgtnmg.png" alt="denzetours&travel" width={hideToolbar ? 210 : 230} height={60} style={{objectFit:"cover",marginBottom:hideToolbar ? 6 : 8}}/>
            <Box sx={{
                  display:{xs:'none', md:'none', lg:'block'},
                  // backgroundImage: 'linear-gradient(to right, rgba(255, 204, 40, 0.1), rgba(255, 204, 40, 0.1))',
                  overflow: 'hidden',
                  marginRight:2
              }}>
            <m.h3
               className="slogan"
               style={{
              
                whiteSpace: 'nowrap', // Prevent text from wrapping
                // Hide overflowing text
                animation: 'moveLeftToRight 10s linear infinite', // Adjust duration as needed
              }}
            >
              <i><b>{t('navbar.slogan')} <Star fontSize='6' sx={{color:"#FFCA28"}}/> <Star fontSize='6' sx={{color:"#FFCA28"}}/></b></i>
              </m.h3>
            </Box>
          </Typography>
          <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
          <Box width={{sm:"75%", md:"50%"}} justifyContent="space-between" display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
          <LinkItem to="/" page={t('navbar.home')}/>
            <LinkItem to="/about" page={t('navbar.about')}/>
            <LinkItem to="/packages" page={t('navbar.packages')}/>
            <LinkItem to="/destinations" page={t('navbar.destinations')}/>
            <LinkItem to="/contact" page={t('navbar.contact')}/>
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
