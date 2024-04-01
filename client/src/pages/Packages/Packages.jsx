import Wrapper from "../../layouts/Wrapper";
import { Box, FormControl, Grid, Container, Stack, Button, Typography, IconButton, TextField } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { Filter, Package} from "../../components";
import Train from '../../assets/train.jpg'
import America from '../../assets/america.webp'
import Bridge from '../../assets/bridge.jpg'
import { LocationSearching } from "@mui/icons-material";
export default function Packages(){
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:"100vh",
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container maxWidth sx={{marginBottom:3}}>
        <Stack direction="row" spacing={1}>
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >Search Tours</Typography>
        </Stack>
       </Container>
        <Filter/>
       </Box>
       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:-20}}>
            <Stack direction="row" spacing={2} sx={{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row", lg:"row",xl:"row"}, alignItems:"center",cursor:"pointer"}}>
             <Package image={Train}/>
             <Package image={America}/>
             <Package image={Bridge}/>
            </Stack>

        </Container>
    </Wrapper>
    )
}