import Wrapper from "./Wrapper";
import { Box, Typography, Container } from "@mui/material";
import Travel from '../assets/warm.jpg'
export default function AuthWrapper (props) {
    const {title, caption, children, bg=Travel} = props
    return (
        <Wrapper>
        <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        alignItems:"center",
        height:{xs:"30vh", sm:"40vh",md:"50vh", lg:"85vh", xl:"50vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>

        <Typography variant="h5" fontWeight="bold" sx={{marginTop:8, letterSpacing:1}}>{title}</Typography>
        <Typography variant="p" sx={{marginTop:2, letterSpacing:1}}>Home &gt; {caption}</Typography>
       </Box>
        <Container maxWidth sx={{marginY:2}}>
        {children}
        </Container>
        </Wrapper>
    )
}