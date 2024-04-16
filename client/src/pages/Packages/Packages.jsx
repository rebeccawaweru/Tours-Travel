import Wrapper from "../../layouts/Wrapper";
import { Box, Grid, Container, Stack, Typography, Button} from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { Filter, Package} from "../../components";
import Train from '../../assets/train.jpg'
import America from '../../assets/america.webp'
import Bridge from '../../assets/bridge.jpg'
import { TravelExplore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
export default function Packages(){
    const [search, setSearch] = useState(false)
    const [data,setData] = useState([])
    const [referrals, setReferrals] = useState([])
    const [filtered, setFiltered] = useState([])
    const [parameters, setParameters] = useState({
        keyword:"",
        activity:"",
        category:"",
        duration:"",
        date:""
    })
    const combined = [...data, ...referrals]
 
    const handleChange = (e) =>{
        setParameters((parameters) => ({...parameters, [e.target.name]:e.target.value}))
    }
    const handleSearch = async() => {
       setSearch(true)
       setFiltered(combined.filter(item => {
        // Check if any parameter value matches any property value in the combined item
        return Object.entries(parameters).some(([paramKey, paramValue]) => {
          return Object.values(item).includes(paramValue) || (paramKey === 'activity' && Array.isArray(item[paramKey]))
        });
      }))
    }
    const handleReset = () => {
        setSearch(false)
        window.location.reload()
    }
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
    },[])
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:{xs:"120vh",sm:"80vh",md:"100vh", lg:"120vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:16,md:0}}}>
        <Stack direction="row" spacing={1}>
        <TravelExplore fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >Search Tours </Typography>
        </Stack>
       </Container>
        <Filter handleChange={handleChange} handleSearch={handleSearch}/>
       </Box>
       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"20px", marginTop:{xs:-4,md:-20}}}>
            <Grid direction="row" container  gap={1} sx={{alignItems:"center",justifyContent:{xs:"center",md:"center",lg:"start"},cursor:"pointer"}}>
            {!search && combined && combined.length > 0 && combined.map((item)=>{
                    return <Package id={item._id} link={item.link} price={`${item.currency} ${Number(item.price).toLocaleString() || 0}`} location={`${item.hotel} ${item.location} ${item.country}`} title={item.title} duration={`${item.nights} ${item.days}`} image={item.poster}/>
                  })
               }

            {search && filtered && filtered.length > 0 ? filtered.map((item)=>{
                    return <Package id={item._id} link={item.link} price={`${item.currency} ${Number(item.price).toLocaleString() || 0}`} location={`${item.hotel} ${item.location} ${item.country}`} title={item.title} duration={`${item.nights} ${item.days}`} image={item.poster}/>
                  }) : search  && <p>No tour packages found <Button onClick={handleReset} component="p">Reset</Button> </p>
                } 
                
          
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image={Train}/>
             <Package price={3000} image={America} title="America – 2 Days in Lake Tahoe" location="America" duration="7 days"/>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image={Bridge}/>
            </Grid>
        </Container>
    </Wrapper>
    )
}