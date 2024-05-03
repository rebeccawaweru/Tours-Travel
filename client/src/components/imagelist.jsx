import { Box, Grid, Stack, Typography} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { itemData } from '../utils/helpers';
import { useTranslation } from 'react-i18next';
export default function CustomImageList({...props}) {
    const [hovered, setHovered] = useState(false);
    const {t} = useTranslation()
    const handleMouseEnter = () => {
      setHovered(true);
    };
    const handleMouseLeave = () => {
      setHovered(false);
    };
  return (
    <Grid container alignItems="center" direction="row" {...props}>
            {itemData.slice(0, 4).map((item) =>  (
            <Grid component={Link} to={`/destination?category=${t(item.title)}`} position="relative" item xs={12} sm={3} md={3}  key={item.title}>
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
            <Typography variant="h6" fontWeight="bold">{t(item.title)}</Typography>
           </Stack>
         </Box>
            {hovered ? <Typography marginLeft={1} component={Link} to="/destinations" fontWeight="bold" color="primary">{t('destination.view')}</Typography> : null}
         </Box>
         </Box>
            </Grid>
            ))}
    </Grid>
  );
}


