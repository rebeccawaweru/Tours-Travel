import Wrapper from "../../layouts/Wrapper"
import { Container, Box, Button, Grid, Typography, Stack, Icon, IconButton } from "@mui/material"
import { Slider, Quality, Package, LinkBtn } from "../../components"
import { content } from "../../utils/helpers"
import {  CalendarViewMonth, Search} from "@mui/icons-material"
import background from '../../assets/background.jpg'
import {BasicInput, BasicSelect, CustomImageList, Filter} from "../../components"
import { KeyboardArrowLeft, KeyboardArrowRight, LocationOn } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Plane from '../../assets/plane.webp'
import Price from '../../assets/prices.png'
import Support from '../../assets/support.png'
import Calender from '../../assets/calender.webp'
import Train from '../../assets/train.jpg'
import America from '../../assets/america.webp'
import Bridge from '../../assets/bridge.jpg'
export default function LandingPage(){
    return (
        <Wrapper>
        <Slider images={content}/>
 
        <Box sx={{height:"35vh",backgroundColor:"#2196f3",display:"flex",justifyContent:"space-around", flexWrap:"wrap", alignItems:"center"}}>
          <Quality src={Plane} alt="destinations" title="500+ DESTINATIONS" caption="Morbi leo risus, porta ac"/>
          <Quality src={Price} alt="prices" title="BEST PRICE GUARANTEE" caption="Morbi leo risus, porta ac"/>
          <Quality src={Support} alt="support" title="GREAT CUSTOMER" caption="Morbi leo risus, porta ac"/>
          <Quality src={Calender} alt="bookings" title="SUPER FAST BOOKING" caption="Morbi leo risus, porta ac"/>
        </Box>

        
        <Box sx={{backgroundImage:`url(${background})`, backgroundPosition:"center", backgroundSize:"cover"}}>
          <Container maxWidth sx={{backgroundColor: 'rgba(0, 0, 0, 0.9)', paddingY:15, color:"whitesmoke",width:"100%"}}>
          <Filter/>
        </Container>
     
        <Container maxWidth sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)',paddingY:"50px"}}>
            <Typography sx={{marginBottom:"40px"}} fontSize="large" fontWeight="bold">Popular Tour Packages / <Link style={{color:"#2196f3", textDecoration:"none"}} to="/packages">View All Tours</Link></Typography>
            <Stack direction="row" spacing={2} sx={{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row", lg:"row",xl:"row"}, justifyContent:"space-between",alignItems:"center",cursor:"pointer"}}>
            <KeyboardArrowLeft sx={{backgroundColor:"#2196f3", padding:2, color:"whitesmoke"}}/>
             <Package image={Train}/>
             <Package image={America}/>
             <Package image={Bridge}/>
             <KeyboardArrowRight sx={{backgroundColor:"#2196f3", padding:2, color:"whitesmoke"}}/>
            </Stack>

        </Container>

        </Box>
     
        <Container maxWidth sx={{paddingY:"50px"}}>
            <Typography fontWeight="bold" variant="h6">Popular Destinations / <LinkBtn to="/destinations" title="View All Destinations"/></Typography>
        </Container>
        <CustomImageList/>
        </Wrapper>
    )
}