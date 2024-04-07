import { Logout } from '@mui/icons-material'
import {AppBar, Container, IconButton, Toolbar, Typography, Grid} from '@mui/material'
import { SideBar } from '../components'
import {useNavigate} from 'react-router-dom'
export default function AdminDashboard({children}){
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem('user_id')
        navigate('/')
    }
    return (
        <Grid container direction="row">
            <Grid item sm={0} md={3} lg={2} display={{xs:"none",sm:"none",md:"block"}}>
            <SideBar/>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10}  display="flex" flexDirection="column">
             <AppBar position="static" elevation={0}>
                <Toolbar>
                  <Typography flexGrow={1}>Welcome, Rebecca Waweru</Typography>
                  <IconButton onClick={handleLogout}><Logout/></IconButton>
                </Toolbar>
             </AppBar>
             <Container maxWidth>
                {children}
             </Container>
            </Grid>
        </Grid>
    )
}