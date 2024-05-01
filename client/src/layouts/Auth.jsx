import Wrapper from "./Wrapper";
import { Box, Typography, Container } from "@mui/material";
export default function AuthWrapper (props) {
    const {title, caption, children, bg="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485143/warm_ig2cae.jpg"} = props
    return (
        <Wrapper>
        <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        alignItems:"center",
        height:{xs:"60vh", sm:"60vh",md:"80vh", lg:"85vh", xl:"50vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
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