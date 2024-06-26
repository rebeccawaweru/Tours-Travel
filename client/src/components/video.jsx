import {Box} from '@mui/material'
export default function Video({children}){
    return   <Box maxWidth sx={{
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        alignItems:"center",
        height:{xs:"120vh",sm:"100vh",md:"90vh", lg:"100vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
        <video width="100%" style={{height:"100%", objectFit:"cover", overflow:"hidden"}} preload="auto" muted autoPlay loop>   
        <source src="https://res.cloudinary.com/dkjb6ziqg/video/upload/v1714563846/Spectacular_Norway_-_from_the_air_1_dk3pnx_i2iruj.mp4" type="video/mp4"></source>
        </video>
        <Box position="absolute" textAlign="center">
           {children}
        </Box>
       </Box>
}