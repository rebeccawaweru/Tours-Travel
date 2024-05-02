import { Logout,Menu} from '@mui/icons-material'
import {AppBar, Container, IconButton, Stack, Toolbar, Typography, Grid} from '@mui/material'
import { SideBar, CustomDrawer } from '../components'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { Link } from 'react-router-dom'


export default function AdminDashboard({children}, user){
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem('user_id')
        navigate('/')
    }
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
    return (
        <Grid container direction="row">
            <Grid item sm={0} md={3} lg={2} display={{xs:"none",sm:"none",md:"block"}}>
            <SideBar/>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10}  display="flex" flexDirection="column">
             <AppBar position="static" elevation={0}>
                <Toolbar>
                  <Typography flexGrow={1}>Welcome, {user}</Typography>
                  <IconButton sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }} onClick={handleDrawerOpen}><Menu /></IconButton>
                  <IconButton sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }} onClick={handleLogout}><Logout/></IconButton>
                </Toolbar>
             </AppBar>
             <Container maxWidth>
                {children}
             </Container>
            </Grid>

                  {/* Drawer */}
      <CustomDrawer open={openDrawer} onClose={handleDrawerClose}>
        <Stack
           direction="column"
           gap={8}
           sx={{ width: 200,  height:"100vh", paddingTop:4, paddingLeft:4, textAlign:"left" }} // Set color to black
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
   
      <img src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/denze-new_rgtnmg.png" alt="denzetours&travel" width={180} height={80} style={{objectFit:"cover", alignSelf:"center"}}/>
  
         <Link style={{textDecoration:"none"}} to="/dashboard">Dashboard</Link>
         <Link style={{textDecoration:"none"}} to="/tourpackages">Tours</Link>
         <Link style={{textDecoration:"none"}} to="/newpackage">Create Package</Link>
         <Link style={{textDecoration:"none"}} to="/bookings">Referrals</Link>
         <Link onClick={()=>localStorage.removeItem('user_id')} style={{textDecoration:"none"}} to="/">Logout</Link>

        </Stack>
      </CustomDrawer>
        </Grid>
    )
}