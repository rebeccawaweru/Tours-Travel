import { Typography, Grid, Box, Container, Stack } from "@mui/material";
import Logo from '../../assets/tour-logo.png'
import { itemData } from "../../utils/helpers";
import { Facebook, Instagram, X } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function Footer(){
  const navigate = useNavigate()
    return (
    <Box bgcolor="#000435" textAlign="center" overflow="hidden" paddingY={2}>
        <Container sx={{display:"flex" }} gap={{xs:1,md:1,lg:2,xl:6}} component={Grid}  container maxWidth direction="row" paddingBottom={8} paddingTop={4}>
             
              <Grid display="flex" flexDirection="column" justifyContent={{xs:"center",sm:"start"}} xs={12} sm={4} md={3} lg={3} item container color="whitesmoke" fontSize="small" textAlign="left">
              <Typography color="whitesmoke" fontSize="small" fontWeight="bold" textAlign={{xs:"center",md:"left"}} >ABOUT US</Typography>
                <Box component="img" src={Logo} alt="denze logo" width={240} height={100} sx={{objectFit:"cover",alignSelf:{xs:"center",md:"start"} }}/>
                <Typography color="#8c8c8c" fontSize="small">An international tour operator that specializes in custom
            business and leisure itineraries, and luxury vacation packages with an intent to provide
            travelers with flawless holidays and sparkling travel experience.</Typography>
              </Grid>
               
              <Grid xs={12} sm={6} md={6} lg={6} item>
                <Typography color="whitesmoke" fontSize="small" fontWeight="bold">TOP DESTINATIONS</Typography>
                 <Grid  alignItems="center" display="flex" justifyContent="center" container maxWidth gap={1} direction="row" marginTop={2} >
                {itemData.slice(0, 4).map((item)=>{
                return <Box  onClick={()=>navigate(`/packages?category=${item.title}`)} height={100} component={Grid}  item sm={5} md={5}  xs={2}
                alignItems="center" display="flex" justifyContent="center"
               sx={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.img})`,backgroundPosition:"center", cursor:"pointer"}}>
                <Typography display={{xs:"none",sm:"block"}} color="whitesmoke" fontWeight="bold">{item.title}</Typography>
               </Box>
                })}
                </Grid>
              </Grid>

              <Grid  xs={12} sm={3} md={2} lg={2} direction={{xs:"column", md:"row"}} paddingLeft={{xs:0,md:4}} item container gap={2} color="#8c8c8c" textAlign="left" fontSize="small">

                <Typography color="whitesmoke" fontSize="small" fontWeight="bold" textAlign={{xs:"center",sm:"left"}} >CONTACT INFO</Typography>
                 <Box component={Stack} direction="column" spacing={2}>
                 <Typography fontSize="small">Location: Hurlingham Plaza, Along Argwings Kodhek Road, Nairobi, Kenya</Typography>
                <Typography fontSize="small">Tel: +254 707 741 232</Typography>
                <Typography fontSize="small">info@denzetoursandtravels.com</Typography>
                 </Box>
   
                <Stack direction="row" gap={2}>
                    <Facebook/>
                    <Instagram/>
                    <X/>
                </Stack>
              </Grid>

        </Container>
    <Typography color="#8c8c8c" fontSize={13} sx={{letterSpacing:1}}>Copyright &copy; 2024 Denze Tours and Travels. All Rights Reseved</Typography>
    </Box>
    )
}