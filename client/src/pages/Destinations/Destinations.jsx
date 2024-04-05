import Wrapper from "../../layouts/Wrapper";
import { Box, Grid, Container, Stack,  Typography } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { Filter, Package} from "../../components";
import Train from '../../assets/train.jpg'
import America from '../../assets/america.webp'
import Bridge from '../../assets/bridge.jpg'
import { LocationSearching } from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
export default function Destinations(){
    const [data,setData] = useState([])
    async function getPackages(){
        await client.get('/find').then((response)=>{
             setData(response.data)
        })
      }
    useEffect(()=>{
        getPackages()
    },[])
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:{xs:"120vh",sm:"100vh",md:"70vh", lg:"100vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:0}}}>
        <Stack direction="row" spacing={1}>
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >DESTINATIONS</Typography>
        </Stack>
        <Typography color="whitesmoke" variant="body1">Explore Tours By Destinations</Typography>
       </Container>
       </Box>
       <Box sx={{backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
            <Grid direction="row" container  gap={2} sx={{alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                {data.map((item)=>{
                    return <Package id={item._id} price={item.price} location={item.location} title={item.title} duration={item.duration} image={item.poster}/>
                })}
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image={Train}/>
             <Package price={3000} image={America} title="America – 2 Days in Lake Tahoe" location="America" duration="7 days"/>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image={Bridge}/>
            </Grid>

        </Box>
    </Wrapper>
    )
}