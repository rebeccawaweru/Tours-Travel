import { Typography, Grid, Box, Container, Stack, IconButton } from "@mui/material";
import { itemData } from "../../utils/helpers";
import { Facebook, Instagram, X } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer(){
  const {t} = useTranslation()
  const navigate = useNavigate()
    return (
    <Box bgcolor="#000435" textAlign="center" overflow="hidden" paddingY={2}>
        <Container sx={{display:"flex" }} gap={{xs:1,md:1,lg:2,xl:6}} component={Grid}  container maxWidth direction="row" paddingBottom={8} paddingTop={4}>
             
              <Grid display="flex" flexDirection="column" justifyContent={{xs:"center",sm:"start"}} xs={12} sm={4} md={3} lg={3} item container color="whitesmoke" fontSize="small" textAlign="left">
              <Typography color="whitesmoke" fontSize="small" fontWeight="bold" textAlign={{xs:"center",md:"left"}} >{t("footer.about")}</Typography>
                <Box component="img" src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/denze-new_rgtnmg.png" alt="denze logo" loading="lazy" width={230} height={100} sx={{objectFit:"cover",alignSelf:{xs:"center",md:"start"} }}/>
                <Typography color="#8c8c8c" fontSize="small">{t("shortabout")}</Typography>
              </Grid>
               
              <Grid xs={12} sm={6} md={6} lg={6} item>
                <Typography color="whitesmoke" fontSize="small" fontWeight="bold">{t("footer.top")}</Typography>
                 <Grid  alignItems="center" display="flex" justifyContent="center" container maxWidth gap={1} direction="row" marginTop={2} >
                {itemData.slice(0, 4).map((item)=>{
                return <Box  onClick={()=>navigate(`/destination?category=${item.title}`)} height={100} component={Grid}  item sm={5} md={5}  xs={2}
                alignItems="center" display="flex" justifyContent="center"
               sx={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.img})`,backgroundPosition:"center", cursor:"pointer"}}>
                <Typography display={{xs:"none",sm:"block"}} color="whitesmoke" fontWeight="bold">{t(item.title)}</Typography>
               </Box>
                })}
                </Grid>
              </Grid>

              <Grid  xs={12} sm={3} md={2} lg={2} direction={{xs:"column", md:"row"}} paddingLeft={{xs:0,md:4}} item container gap={2} color="#8c8c8c" textAlign="left" fontSize="small">
                <Typography color="whitesmoke" fontSize="small" fontWeight="bold" textAlign={{xs:"center",sm:"left"}}>{t("footer.contact")}</Typography>
                 <Box component={Stack} direction="column" spacing={2}>
                 <Typography fontSize="small">{t("footer.location")}</Typography>
                <Typography fontSize="small">{t("footer.tel")}</Typography>
                <Typography fontSize="small">info@denzetoursandtravels.com</Typography>
                 </Box>
   
                <Stack direction="row" gap={2}>
                    <Typography><Facebook/></Typography>
                    <a href="https://www.instagram.com/denzetoursandtravels/"  target='_blank'><Typography color="whitesmoke"><Instagram/></Typography></a>
                    <a href='https://twitter.com/DENZETours' target='_blank'><Typography color="whitesmoke"><X/></Typography></a>
                </Stack>
              </Grid>

        </Container>
    <Typography color="#8c8c8c" fontSize={13} sx={{letterSpacing:1}}>{t("footer.copyright")}</Typography>
    </Box>
    )
}