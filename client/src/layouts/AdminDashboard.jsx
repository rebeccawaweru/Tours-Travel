import { Logout, PowerOff } from '@mui/icons-material'
import {AppBar, Container, IconButton, Toolbar, Typography, Box,Grid} from '@mui/material'
import { SideBar } from '../components'
export default function AdminDashboard({children}){
    return (
        <Grid container direction="row">
            <Grid item sm={0} md={3} lg={2} display={{xs:"none",sm:"none",md:"block"}}>
            <SideBar/>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10}  display="flex" flexDirection="column">
             <AppBar position="static" elevation={0}>
                <Toolbar>
                  <Typography flexGrow={1}>Welcome, Rebecca Waweru</Typography>
                  <IconButton><Logout/></IconButton>
                </Toolbar>
             </AppBar>
             <Container maxWidth>
                {children}
             </Container>
            </Grid>
        </Grid>
    )
}