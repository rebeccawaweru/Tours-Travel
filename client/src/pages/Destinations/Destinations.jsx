import Wrapper from "../../layouts/Wrapper";
import { Container, Stack,  Typography } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { Video, Package, CustomImageList} from "../../components";
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
       <Video>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:10}}}>
        <Stack direction="row" spacing={1} >
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >DESTINATIONS</Typography>
        </Stack>
        <Typography color="whitesmoke" variant="body1">Explore Tours By Destinations</Typography>
       </Container>
       </Video>

       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"5px", marginTop:{xs:-4,md:-10}}}>
            <CustomImageList gap={2} maxWidth justifyContent="center"/>
        </Container>
    </Wrapper>
    )
}