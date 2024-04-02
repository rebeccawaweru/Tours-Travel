import * as React from 'react';
import {Divider, Paper, MenuList, Grid, Stack, Typography} from '@mui/material';
import {Add, BookOnline, Dashboard, Notifications, Tour, TravelExplore} from '@mui/icons-material';
import Logo from '../../assets/logodenze.png'
import CustomMenuItem from './menuitem';
export default function SideBar() {
  return (
    <Paper elevation={0} sx={{ width:{xs:"",sm:"",md:"25%", lg:"16.8%", xl:"16.5%"}, height:"100vh", backgroundColor:"whitesmoke", position:"fixed" }}>

      <MenuList component={Stack} spacing={4}> 
      <img src={Logo} alt="denzetours&travel" width={80} height={80} style={{objectFit:"cover", alignSelf:"center"}}/>
        <CustomMenuItem icon={<Dashboard/>} title="Dashboard"/>
        <CustomMenuItem icon={<TravelExplore/>} title="Tours" to="/tourpackages"/>
        <CustomMenuItem icon={<Add/>} title="Create Package" to="/newpackage"/>
        <CustomMenuItem icon={<BookOnline/>} title="Bookings" to="/bookings"/>
        <CustomMenuItem icon={<Tour/>} title="Advertisements"/>
        {/* <CustomMenuItem icon={<Notifications/>} title="Notifications"/> */}
   


      </MenuList>
    </Paper>
  );
}