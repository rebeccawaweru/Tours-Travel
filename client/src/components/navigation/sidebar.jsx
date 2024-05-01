import * as React from 'react';
import { Paper, MenuList, Stack, Box} from '@mui/material';
import {Add, AddLink, Dashboard, TravelExplore} from '@mui/icons-material';
import CustomMenuItem from './menuitem';
export default function SideBar() {
  return (
    <Paper elevation={0} sx={{ width:{xs:"",sm:"",md:"25%", lg:"16.8%", xl:"16.5%"}, height:"100vh", backgroundColor:"black", position:"fixed" }}>
      <Box marginY={4}>
      <img src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/denze-new_rgtnmg.png" alt="denzetours&travel" width={180} height={80} style={{objectFit:"cover", alignSelf:"center"}}/>
      </Box>

      <MenuList component={Stack} spacing={3}> 
        <CustomMenuItem icon={<Dashboard/>} title="Dashboard" to="/dashboard"/>
        <CustomMenuItem icon={<Add/>} title="Create Package" to="/newpackage"/>
        <CustomMenuItem icon={<TravelExplore/>} title="Tour Packages" to="/tourpackages"/>
        <CustomMenuItem icon={<AddLink/>} title="Referrals" to="/bookings"/>
        {/* <CustomMenuItem icon={<Tour/>} title="Referals"/> */}
        {/* <CustomMenuItem icon={<Notifications/>} title="Notifications"/> */}
   


      </MenuList>
    </Paper>
  );
}