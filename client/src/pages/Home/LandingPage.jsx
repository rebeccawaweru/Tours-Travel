import Wrapper from "../../layouts/Wrapper"
import { useEffect } from "react"
import { Container, Box, Typography, Stack} from "@mui/material"
import { Slider, Quality, Package} from "../../components"
import { content, services } from "../../utils/helpers"
import {CustomImageList, Filter, WhatsAppChat} from "../../components"
import { KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material"
import { Link,useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getPackages } from "../../reducers/packageSlice"
import {useDispatch, useSelector} from 'react-redux'
export default function LandingPage(){
  const dispatch = useDispatch()
  const {packages} = useSelector((state) => state.package)
  const navigate = useNavigate()
  const { t } = useTranslation();
    useEffect(()=>{
      dispatch(getPackages())
  },[dispatch,packages])
    return (
        <Wrapper>
          <WhatsAppChat/>
        <Slider images={content}/>
        <Box sx={{height:{xs:"50vh", md:"40vh"},backgroundColor:"#2196f3",display:"flex", flexDirection:{xs:"column",md:"row"},justifyContent:"space-around", alignItems:"center"}}>
          {services.map((service)=>{
            return <Quality key={service.title} src={service.img} alt={t(service.title)} title={t(service.title)} caption={t(service.caption)}/>
          })}
        </Box>
        <Box sx={{backgroundImage:`url('https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485103/background_szhgap.jpg')`, backgroundPosition:"center", backgroundSize:"cover"}}>
          <Container maxWidth sx={{backgroundColor: 'rgba(0, 0, 0, 0.9)', paddingY:15, color:"whitesmoke",width:"100%"}}>
          <Filter handleSearch={()=>navigate('/packages')}/>
        </Container>
        <Container maxWidth sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)',paddingY:"50px"}}>
            <Typography sx={{marginBottom:"40px"}} fontSize="large" fontWeight="bold" color="whitesmoke">{t("popular")} / <Link style={{color:"#2196f3", textDecoration:"none"}} to="/packages">{t("viewall")}</Link></Typography>
            <Stack spacing={2} gap={2} direction={{xs:"column", sm:"row"}} justifyContent="center" flexWrap={{sm:"wrap",md:"nowrap"}} alignItems="center" sx={{cursor:"pointer"}}>
            <KeyboardArrowLeft sx={{backgroundColor:"#2196f3", padding:2, color:"whitesmoke", display:{xs:"none",sm:"none",md:"block"}}}/>
            {(packages && packages.length > 0) ? packages.slice(0, 3).map((item) => {
              return <Package id={item._id} link={item.link} price={item.price} location={`${item.location} ${item.country}`} title={item.title} duration={`${item.nights} ${t("details.night")} ${item.days} ${t("details.days")}`} image={item.poster}/>
            }): <Typography color="whitesmoke" fontWeight="bold">LOADING....</Typography>}
             <KeyboardArrowRight sx={{backgroundColor:"#2196f3", padding:2, color:"whitesmoke", display:{xs:"none",sm:"none",md:"block"}}}/>
            </Stack>
        </Container>
        </Box>
        <Container maxWidth sx={{paddingY:"40px",backgroundColor:"white"}}>
            <Typography fontWeight="bold" variant="h6" lineHeight={2}>{t("popular2")} / <Link style={{color:"#2196f3", textDecoration:"none"}} to="/destinations">{t("viewall2")}</Link></Typography>
            <Typography color="#8c8c8c" lineHeight={2}>
              {t("description")}
            </Typography>
        </Container>
        <CustomImageList/>
        </Wrapper>
    )
}