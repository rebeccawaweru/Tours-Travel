import { Service, Video } from "../../components";
import Wrapper from "../../layouts/Wrapper";
import {Container, Typography, Grid } from "@mui/material";
export default function About(){
    return (
        <Wrapper>
         <Video>
        <Typography variant="h5" fontWeight="bold" sx={{marginTop:8, letterSpacing:1}}>About Us</Typography>
        <Typography variant="p" sx={{marginTop:2, letterSpacing:1}}>Home &gt; Learn More </Typography>
        </Video>
       <Container maxWidth sx={{paddingY:5}}>
        <Grid display={{xs:"block",md:'flex'}}  gap={2} maxWidth>
            <Grid item>
            <Typography variant="h5" fontWeight="bold">DENZE TOURS AND TRAVELS</Typography>
            <Typography variant="body1" color="text.secondary">(We will add a paragraph about the company)Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis eaque ab earum sapiente ex laboriosam ducimus a, ratione, necessitatibus quisquam adipisci voluptatem ea, aperiam cum tempore numquam asperiores aliquid!</Typography>
            </Grid>
            <Grid direction="column" item container bgcolor="whitesmoke" gap={4} padding={4} marginTop={{xs:2,md:0}}>
                <Service service="500+ Destinations"/>  
                <Service service="Greate Customer Service"/>  
                <Service service="Super Fast Booking"/>
                <Service service="Affordable Prices"/>
            </Grid>

        </Grid>
       </Container>
    </Wrapper>
    )
}