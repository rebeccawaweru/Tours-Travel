import { Box, Grid, Stack, Typography} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Palm from '../assets/palm.jpg'
import Europe from '../assets/europe.webp'
import Asia from '../assets/asia.webp'
import Africa from '../assets/africa.webp'
export default function CustomImageList() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  return (
    <Grid container alignItems="center" direction="row" >
            {itemData.map((item) =>  (
            <Grid  position="relative" item xs={12} sm={3} md={3}  key={item.title}>
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
           <Stack  direction="row" spacing={1}>
            <Typography><LocationOn /></Typography>
            <Typography  fontWeight="bold">{item.title}</Typography>
           </Stack>

            <Typography marginLeft={{xs:1,sm:1,md:6,lg:16,xl:16}} fontWeight="bold" color="primary">3 Tours</Typography>
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

const itemData = [
  {
    img: Palm,
    title: 'America',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: Europe,
    title: 'Europe',
    author: '@rollelflex_graphy726',
  },
  {
    img: Asia,
    title: 'Asia',
    author: '@helloimnik',
  },
  {
    img: Africa,
    title: 'Africa',
    author: '@nolanissac',
    cols: 2,
  },
//   {
//     img: Africa,
//     title: 'Africa',
//     author: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
];
