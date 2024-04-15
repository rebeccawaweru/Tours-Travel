import Wrapper from "../../layouts/Wrapper";
import { Container, Stack,  Typography, Grid } from "@mui/material";
import { Video} from "../../components";
import { LocationSearching, LocationOn } from "@mui/icons-material";
import { itemData } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
export default function Destinations(){
    const navigate = useNavigate()
    return (
        <Wrapper>
       <Video>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:10}}}>
        <Stack direction="row" spacing={1} >
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >DESTINATIONS</Typography>
        </Stack>
        <Typography color="whitesmoke" variant="body1">Explore Tours By Destinations</Typography>
       </Container>
       </Video>

       <Grid container bgcolor="whitesmoke" display="flex" flexWrap="wrap" justifyContent="center" gap={1} sx={{paddingY:"5px", marginTop:{xs:-4,md:-10}}}>
             {itemData.map((item)=>{
                return <Grid onClick={()=>navigate(`/destination?category=${item.title}`)} position="relative"  key={item.title} item container  sx={{width:{xs:"100%",sm:"40%",md:"30%"}, height:"400px",cursor:"pointer",backgroundSize:"cover",
                '&:hover': {
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0.2, 0.6), rgba(0, 0, 0.2, 0.6)), url(${item.img})`,
                  borderBottom:'3px solid #2196f3'
                },
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.img})`,
                borderBottom:'0px solid transparent'
              }}><Stack  position="absolute" bottom={4} color="whitesmoke" direction="row" spacing={1}><LocationOn/><Typography variant="h6" fontWeight="bold">{item.title}</Typography></Stack></Grid>
             })}
        </Grid>
    </Wrapper>
    )
}