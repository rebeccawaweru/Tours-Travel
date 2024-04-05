import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Timer, Star, Share, LocationOn } from '@mui/icons-material';
import { Stack, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Package({id,image, duration, title, price, location}) {
  const rating = [1, 2, 3, 4, 5]
  const navigate = useNavigate()
  return (
    <Card  sx={{width: 400}}>
      <CardMedia
        sx={{ height: 250, objectFit:"cover" }}
        image={image}
        title="green iguana"
      />
      <CardContent component={Grid} direction="column" container gap={2}>
        
        <Typography sx={{display:"flex", justifyContent:"space-between"}} gutterBottom variant="p" component="div">
          <Typography fontSize="medium" fontWeight="bold" color="inherit">{title}</Typography>
          <Typography color="primary" fontWeight="bold">${price}</Typography>
        </Typography>
        <Stack direction="row" spacing={1}>
            <LocationOn/>
           <Typography>{location}</Typography>
        </Stack>
           <Stack direction="row" spacing={1}>
            <Timer/>
            <Typography variant="body2" color="text.secondary"> {duration}
            </Typography>
           </Stack>

           <Stack direction="row" spacing={1}>
            {rating.map((star)=>{
               return <Star key={star} sx={{color:"#FFCA28"}}/>
            })}
            <Typography variant="body2" color="text.secondary"> (5 Reviews)
            </Typography>
           </Stack>          
      </CardContent>
      <CardActions sx={{justifyContent:"space-between", cursor:"pointer"}}>
        <Button onClick={()=>navigate(`/package/${id}`)} variant="outlined" size="small">Learn More</Button>
        <Share/>
      </CardActions>
    </Card>
  );
}
