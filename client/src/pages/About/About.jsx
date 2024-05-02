import { Service, Video } from "../../components";
import Wrapper from "../../layouts/Wrapper";
import {Container, Typography, Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function About(){
    const {t} = useTranslation()
    return (
        <Wrapper>
         <Video>
        <Typography variant="h5" fontWeight="bold" sx={{marginTop:8, letterSpacing:1}}>{t("footer.about")}</Typography>
        <Typography variant="p" sx={{marginTop:4, letterSpacing:1}}>{t("navbar.home")} &gt; {t("destination.learn")}</Typography>
        </Video>
       <Container maxWidth sx={{paddingY:5}}>
        <Grid direction="row" container maxWidth>
            <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold">{t("about.company")}</Typography>
            <Typography variant="body1" sx={{lineHeight:3}}>{t("longabout")}</Typography>
            </Grid>
            <Grid justifyContent="center" xs={12} md={6} direction="column" item container bgcolor="whitesmoke" gap={8} padding={4} marginTop={{xs:2,md:0}}>
                <Service service={t("quality.destination.title")}/>  
                <Service service={t("quality.care.title")}/>  
                <Service service={t("quality.booking.title")}/>
                <Service service={t("quality.price.title")}/>
            </Grid>

        </Grid>
       </Container>
       <Grid maxWidth container>
           <Grid item xs={12} md={6} maxWidth container>
             <img src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485044/about_zdghml.jpg" alt="denze tours and travels background" width="100%" height="100%" sx={{objectFit:"contain"}}/>
            </Grid>

             <Grid item xs={12} md={6} gap={2} container justifyContent="center" alignItems="center" padding={4}>
                <Box>
                <Typography fontWeight="bold" variant="h5">{t("vsn")}</Typography>
                <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
                    <Typography variant="body1"  sx={{lineHeight:3}}>
                    {t("about.vision")}
                    </Typography>
                </Box>

                <Box>
                <Typography fontWeight="bold" variant="h5">{t("msn")}</Typography>
                <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
                 
                  <Typography variant="body1"  sx={{lineHeight:3}}>
                  {t("about.mission")}
                  </Typography>
                </Box>
             </Grid>

        </Grid>
    </Wrapper>
    )
}