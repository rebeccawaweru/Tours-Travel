import Wrapper from "../../layouts/Wrapper";
import { Box, Grid, Container, Stack, Typography} from "@mui/material";
import { Package} from "../../components";
import { LocationSearching } from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
import { itemData } from "../../utils/helpers";
export default function Category(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category')
    const tourdata = itemData.filter(function(item){
        return item.title === category
    })
    const [data,setData] = useState([])
    const [referrals, setReferrals] = useState([])
    const combined = [...data, ...referrals]
    const destinations = combined.filter(function(item){
        return item.category === category
    })
  
    async function getPackages(){
        await client.get('/find').then((response)=>{
             setData(response.data)
        })
      }
    async function getReferrals(){
        await client.get('/find/referrals').then((response)=>{
          setReferrals(response.data)
        })
      }
    useEffect(()=>{
        getPackages()
        getReferrals()
    },[data, referrals])
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:{xs:"120vh",sm:"80vh",md:"95vh", lg:"120vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${tourdata[0].img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container  maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:15,md:0}}}>
        <Stack direction="row" spacing={1} justifyContent="center">
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" > {category && `${category}`}</Typography>
        </Stack>
       </Container>
   
       </Box>
       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
            <Grid direction="row" container  gap={1} sx={{alignItems:"center",justifyContent:"start",cursor:"pointer"}}>
        
       
                
                {/* {destinations && destinations.length > 0 ? destinations.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={item.location} title={item.title} duration={item.duration} image={item.poster}/>
                  }) : <p>No tour packages available under {category}. <Button onClick={()=>window.location.replace('/packages')} component="p">Explore all tours</Button></p>
                }  */}
                  
       
                  <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485121/train_kfyezj.jpg"/>
             <Package price={3000} image="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485099/america_u0clei.webp" title="America – 2 Days in Lake Tahoe" location="America" duration="7 days"/>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/bridge_fmrmqp.jpg"/>
          
            </Grid>

        </Container>
    </Wrapper>
    )
}