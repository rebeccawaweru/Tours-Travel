import * as React from 'react';
import { Paper, MenuList, Stack, Box} from '@mui/material';
import {Add, AddLink, Dashboard, TravelExplore} from '@mui/icons-material';
import Logo from '../../assets/denze-new.png'
import CustomMenuItem from './menuitem';
export default function SideBar() {
  return (
    <Paper elevation={0} sx={{ width:{xs:"",sm:"",md:"25%", lg:"16.8%", xl:"16.5%"}, height:"100vh", backgroundColor:"black", position:"fixed" }}>
      <Box marginY={4}>
      <img src={Logo} alt="denzetours&travel" width={180} height={80} style={{objectFit:"cover", alignSelf:"center"}}/>
      </Box>

      <MenuList component={Stack} spacing={3}> 
        <CustomMenuItem icon={<Dashboard/>} title="Dashboard" to="/dashboard"/>
        <CustomMenuItem icon={<TravelExplore/>} title="Tours" to="/tourpackages"/>
        <CustomMenuItem icon={<Add/>} title="Create Package" to="/newpackage"/>
        <CustomMenuItem icon={<AddLink/>} title="Referrals" to="/bookings"/>
        {/* <CustomMenuItem icon={<Tour/>} title="Referals"/> */}
        {/* <CustomMenuItem icon={<Notifications/>} title="Notifications"/> */}
   


      </MenuList>
    </Paper>
  );
}