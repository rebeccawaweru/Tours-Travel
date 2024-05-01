import Wrapper from "../../layouts/Wrapper"
import { useEffect, useState } from "react"
import client from '../../api/client'
import { Container, Box, Typography, Stack } from "@mui/material"
import { Slider, Quality, Package } from "../../components"
import { content } from "../../utils/helpers"
import {CustomImageList, Filter, WhatsAppChat} from "../../components"
import { KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material"
import { Link,useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
export default function LandingPage(){
  const navigate = useNavigate()
  const { t } = useTranslation();
  const [data,setData] = useState([])
  const [referrals, setReferrals] = useState([])
  const combined = [...data, ...referrals]
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
  },[data,referrals])
  
    return (
        <Wrapper>
          <WhatsAppChat/>
        <Slider images={content}/>
        <Box sx={{height:"40vh",backgroundColor:"#2196f3",display:"flex", flexDirection:{xs:"column",md:"row"},justifyContent:"space-around", alignItems:"center"}}>
          <Quality src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485108/plane_ixfry2.webp" alt="denzedestinations" title="500+ DESTINATIONS" caption="Explore beyond the horizon"/>
          <Quality src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485109/prices_npfyfs.png" alt="denzeprices" title="BEST PRICE GUARANTEE" caption="Best Price Assurance, Always"/>
          <Quality src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485115/support_qbin6j.png" alt="denzesupport" title="GREAT CUSTOMER" caption="Exceptional Customer Care Always"/>
          <Quality src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485046/calender_yag80u.webp" alt="bookings" title="SUPER FAST BOOKING" caption="Instant Booking, Swift Travel"/>
        </Box>
     
        
        <Box sx={{backgroundImage:`url('https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485103/background_szhgap.jpg')`, backgroundPosition:"center", backgroundSize:"cover"}}>
          <Container maxWidth sx={{backgroundColor: 'rgba(0, 0, 0, 0.9)', paddingY:15, color:"whitesmoke",width:"100%"}}>
          <Filter handleSearch={()=>navigate('/packages')}/>
        </Container>
     
        <Container maxWidth sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)',paddingY:"50px"}}>
            <Typography sx={{marginBottom:"40px"}} fontSize="large" fontWeight="bold" color="whitesmoke">Popular Tour Packages / <Link style={{color:"#2196f3", textDecoration:"none"}} to="/packages">View All Tours</Link></Typography>
           
            <Stack spacing={2} gap={2} direction={{xs:"column", sm:"row"}} justifyContent="center" flexWrap={{sm:"wrap",md:"nowrap"}} alignItems="center" sx={{cursor:"pointer"}}>
            <KeyboardArrowLeft sx={{backgroundColor:"#2196f3", padding:2, color:"whitesmoke", display:{xs:"none",sm:"none",md:"block"}}}/>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485121/train_kfyezj.jpg"/>
             <Package price={3000} image="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485099/america_u0clei.webp" title="America – 2 Days in Lake Tahoe" location="America" duration="7 days"/>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/bridge_fmrmqp.jpg"
/>
             <KeyboardArrowRight sx={{backgroundColor:"#2196f3", padding:2, color:"whitesmoke", display:{xs:"none",sm:"none",md:"block"}}}/>
            </Stack>

        </Container>

        </Box>
     
        <Container maxWidth sx={{paddingY:"40px",backgroundColor:"white"}}>
            <Typography fontWeight="bold" variant="h6" lineHeight={2}>Popular Destinations / <Link style={{color:"#2196f3", textDecoration:"none"}} to="/destinations">View All Destinations</Link></Typography>
            <Typography color="#8c8c8c" lineHeight={2}>Dive into a treasure trove of enchanting locales, each offering a unique tapestry of culture, adventure, and natural beauty. From iconic landmarks to hidden gems, embark on a virtual journey with us as we showcase the destinations that capture the hearts and imaginations of travelers worldwide. </Typography>
        </Container>
        <CustomImageList/>
        </Wrapper>
    )
}