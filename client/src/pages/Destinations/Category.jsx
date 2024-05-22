import Wrapper from "../../layouts/Wrapper";
import { Box, Grid, Container, Stack, Typography} from "@mui/material";
import { LinkBtn, Package} from "../../components";
import { LocationSearching } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { itemData } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import { getPackages } from "../../reducers/packageSlice"
import {useDispatch, useSelector} from 'react-redux'
export default function Category(){
    const dispatch = useDispatch()
    const {packages} = useSelector((state) => state.package)
    const {t} = useTranslation()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category')
    const tourdata = itemData.filter(function(item){
        return item.cat === category
    })
   const title = itemData.filter(function(item){
       return item.cat === category ? item.title : null
   })

    const [referrals, setReferrals] = useState([])
    const destinations = packages.filter(function(item){
        return item.category === category
    })

    useEffect(()=>{
       dispatch(getPackages())
    },[dispatch,packages])
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
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
        <Typography variant="h4" fontWeight="bold" > {category && `${t(title[0].title)}`}</Typography>
        </Stack>
       </Container>
       </Box>
       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
            <Grid direction="row" container  gap={1} sx={{alignItems:"center",justifyContent:"start",cursor:"pointer"}}>
                {destinations && destinations.length > 0 ? destinations.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={`${item.location} ${item.country}`} title={item.title} duration={`${item.nights} ${t("details.night")} ${item.days} ${t("details.days")}`} image={item.poster}/>
                  }) : <p>No tour packages available under {category}. <LinkBtn to="/packages" title="Explore all tours"/></p>
                } 
            </Grid>
        </Container>
    </Wrapper>
    )
}