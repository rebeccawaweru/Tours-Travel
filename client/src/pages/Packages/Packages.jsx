import Wrapper from "../../layouts/Wrapper";
import { Box, Grid, Container, Stack, Typography, Button, Skeleton} from "@mui/material";
import { Filter, Package,Skeletons} from "../../components";
import { TravelExplore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
import { useTranslation } from "react-i18next";
export default function Packages(){
    const {t} = useTranslation()
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
    const handleSearch = () => {
       setSearch(true)
       setFiltered(combined.filter(item => {
        // Check if any parameter value matches any property value in the combined item
        return Object.entries(parameters).some(([paramKey, paramValue]) => {
          return Object.values(item).includes(paramValue) || (paramKey === 'activity' && Array.isArray(item[paramKey]))
        });
      }))
    }
    const handleReset = () => {
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
        height:{xs:"120vh",sm:"80vh",md:"100vh", lg:"120vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485110/packagebg_m0y7fg.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:16,md:0}}}>
        <Stack direction="row" spacing={1}>
        <TravelExplore fontSize="large"/>
        <Typography variant="h4" fontWeight="bold">{t("searchtours")} </Typography>
        </Stack>
       </Container>
        <Filter handleChange={handleChange} handleSearch={handleSearch}/>
       </Box>
  
       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"20px", marginTop:{xs:-4,md:-20}}}>
            <Grid direction="row" container  gap={1} sx={{alignItems:"center",justifyContent:{xs:"center",md:"center",lg:"start"},cursor:"pointer"}}>
            {(!search && data && data.length > 0) ? data.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={`${item.location} ${item.country}`} title={item.title} duration={`${item.nights} ${t("details.night")} ${item.days} ${t("details.days")}`} image={item.poster}/>
                  })
               : !search && <Grid display="flex" justifyContent="space-between" gap={2}> 
                <Skeletons/>
                <Skeletons/>
                <Skeletons/>
               </Grid>
               }
               
            {search && filtered && filtered.length > 0 ? filtered.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={`${item.location} ${item.country}`} title={item.title} duration={`${item.nights} ${t("details.night")} ${item.days} ${t("details.days")}`} image={item.poster}/>
                  }) : search  && <p>No tour packages found <Button onClick={handleReset} component="p">Reset</Button> </p>
                } 
            </Grid>
        </Container>
    </Wrapper>
    )
}