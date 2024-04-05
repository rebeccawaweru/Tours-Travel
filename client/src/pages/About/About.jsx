import Wrapper from "../../layouts/Wrapper";
import { Box, Container, Typography } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import Video from '../../assets/video.mp4'
export default function About(){
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:{xs:"120vh",sm:"100vh",md:"70vh", lg:"100vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
            <video autoPlay loop src={Video}>
        </video>
       <Typography variant="h5" fontWeight="bold" sx={{marginTop:8, letterSpacing:1}}>About Us</Typography>
        <Typography variant="p" sx={{marginTop:2, letterSpacing:1}}>Home &gt; Learn More </Typography>
       </Box>
       <Container>
        heeeyyy
       </Container>
    </Wrapper>
    )
}