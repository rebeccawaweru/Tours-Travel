import { Box, Grid, Stack, Typography} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { itemData } from '../utils/helpers';
export default function CustomImageList({...props}) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  return (
    <Grid container alignItems="center" direction="row" {...props}>
            {itemData.map((item) =>  (
            <Grid component={Link} to={`/packages?category=${item.title}`} position="relative" item xs={12} sm={3} md={3}  key={item.title}>
            <Box  
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
          sx={{width:"100%", height:"400px",backgroundSize:"cover",
          '&:hover': {
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0.2, 0.6), rgba(0, 0, 0.2, 0.6)), url(${item.img})`,
            borderBottom:'3px solid #2196f3'
          },
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.img})`,
          borderBottom:'0px solid transparent'
        }}
         >
        <Box position="absolute" paddingX={1} bottom={30}>
         <Box display={{xs:"block", sm:"block", md:"flex", lg:"flex", xl:"flex"}} justifyContent="space-between" >
           <Stack  direction="row" spacing={1} color="whitesmoke">
            <Typography><LocationOn /></Typography>
            <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
           </Stack>

            {/* <Typography marginLeft={{xs:1,sm:1,md:6,lg:16,xl:16}} fontWeight="bold" color="primary">3 Tours</Typography> */}
         </Box>
            {hovered ? <Typography marginLeft={1} component={Link} to="/destinations" fontWeight="bold" color="primary">View all tours</Typography> : null}
      
         </Box>
         </Box>
            </Grid>
            ))}
    </Grid>
    // <Box sx={{width:"100%",display:'flex',flexDirection:{xs:"column",sm:"column",md:"row", lg:"row",xl:"row"},margin:0,justifyContent:"stretch", alignItems:"center"}}>
    //   {itemData.map((item) => (
    //       <Box  
    //       component="img" 
    //       src={`${item.img}`} 
    //       alt={`${item.title}`} 
    //       loading='lazy'
    //       sx={{width:{xs:"100%", sm:"100%", md:"auto", lg:"auto", xl:"auto"}, height:"400px", objectFit:"cover"}}
    //       >
        
    //       </Box>
        //   <img
        //    key={item.img}
        //     width={260}
        //     height={400}
        //     src={`${item.img}`}
        //     alt={item.title}
        //      style={{objectFit:"cover"}}
        //     loading="lazy"
        //   />
        
   
    //   ))}
    // </Box>
  );
}


