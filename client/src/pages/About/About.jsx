import { Service, Video } from "../../components";
import Wrapper from "../../layouts/Wrapper";
import {Container, Typography, Grid, Stack, Box } from "@mui/material";
import AboutImg from '../../assets/about.jpg'
export default function About(){
    return (
        <Wrapper>
         <Video>
        <Typography variant="h5" fontWeight="bold" sx={{marginTop:8, letterSpacing:1}}>About Us</Typography>
        <Typography variant="p" sx={{marginTop:2, letterSpacing:1}}>Home &gt; Learn More </Typography>
        </Video>
       <Container maxWidth sx={{paddingY:5}}>
        <Grid direction="row" container maxWidth>
            <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold">DENZE TOURS AND TRAVELS</Typography>
            <Typography variant="body1" sx={{lineHeight:3}}>
            An international tour operator that specializes in custom
            business and leisure itineraries, and luxury vacation packages with an intent to provide
            travelers with flawless holidays and sparkling travel experience. We have established a
            portfolio of world class exquisite destinations, marvelous upscale hotels and resorts, as
            well as luxury services and amenities that are offered together with highly personalized
            service and impeccable attention to every detail in planning the ultimate tour experience.
            </Typography>
            </Grid>
            <Grid justifyContent="center" xs={12} md={6} direction="column" item container bgcolor="whitesmoke" gap={8} padding={4} marginTop={{xs:2,md:0}}>
                <Service service="500+ Destinations"/>  
                <Service service="Greate Customer Service"/>  
                <Service service="Super Fast Booking"/>
                <Service service="Affordable Prices"/>
            </Grid>

        </Grid>
       </Container>
       <Grid maxWidth container>
           <Grid item xs={12} md={6} maxWidth container>
             <img src={AboutImg} alt="tours and travels background" width="100%" height="100%" sx={{objectFit:"contain"}}/>
            </Grid>

             <Grid item xs={12} md={6} gap={2} container justifyContent="center" alignItems="center" padding={4}>
                <Box>
                <Typography fontWeight="bold" variant="h5">Our Vision</Typography>
                <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
                    <Typography variant="body1"  sx={{lineHeight:3}}>
                    DENZE Tours and Travels strives to create sparkling memories for you in every tour. We
                    are dedicated to perfecting the travel experiences in every way possible and offers a highly
                    personalized service and a great dedication to understanding travelers’ needs.
                    </Typography>
                </Box>

                <Box>
                <Typography fontWeight="bold" variant="h5">Our Mission</Typography>
                <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
                 
                  <Typography variant="body1"  sx={{lineHeight:3}}>
                    DENZE Tours and Travels is devoted to wholly understand your travel preferences in order
                    to provide the most meaningful, authentic and personal or group experience. We look
                    forward to partner with you in your every adventure and tour with great pleasure.
                  </Typography>
                </Box>
             </Grid>

        </Grid>
    </Wrapper>
    )
}