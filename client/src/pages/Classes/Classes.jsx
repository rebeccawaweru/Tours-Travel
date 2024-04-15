import Wrapper from "../../layouts/Wrapper";
import { Container, Stack,  Typography } from "@mui/material";
import { Video} from "../../components";
import { TravelExplore } from "@mui/icons-material";

export default function Classes(){
    return (
        <Wrapper>
       <Video>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:15}}}>
        <Stack direction="row" spacing={1} marginTop={2}>
        <TravelExplore fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >CLASSES</Typography>
        </Stack>
        {/* <Typography color="whitesmoke" variant="body1">Explore Tours By Destinations</Typography> */}
       </Container>
       </Video>

       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"5px",}}>
         <Typography>Classes in progress....</Typography>
        </Container>
    </Wrapper>
    )
}