import Wrapper from "../../layouts/Wrapper";
import { Box, Grid, Container, Stack, Typography, Button} from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { Filter, LinkBtn, Package} from "../../components";
import Train from '../../assets/train.jpg'
import America from '../../assets/america.webp'
import Bridge from '../../assets/bridge.jpg'
import { LocationSearching } from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
export default function Packages(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category')
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
    const destinations = combined.filter(function(item){
        return item.category === category
    })
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
        if (category) {
            setSearch(true)
        }
    },[])
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:{xs:"120vh",sm:"80vh",md:"70vh", lg:"100vh", xl:"100vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:0}}}>
        <Stack direction="row" spacing={1}>
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold" >Search Tours {category && `/ ${category}`}</Typography>
        </Stack>
       </Container>
        <Filter handleChange={handleChange} handleSearch={handleSearch}/>
       </Box>
       <Container maxWidth sx={{backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
            <Grid direction="row" container  gap={1} sx={{alignItems:"center",justifyContent:"start",cursor:"pointer"}}>
            {!search && combined && combined.length > 0 && combined.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={item.location} title={item.title} duration={item.duration} image={item.poster}/>
                  })
               }

            {search && category === null && filtered && filtered.length > 0 ? filtered.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={item.location} title={item.title} duration={item.duration} image={item.poster}/>
                  }) : search && category === null && <p>No tour packages found <Button onClick={handleReset} component="p">Reset</Button> </p>
                } 
                
                {category && destinations && destinations.length > 0 ? destinations.map((item)=>{
                    return <Package id={item._id} link={item.link} price={item.price} location={item.location} title={item.title} duration={item.duration} image={item.poster}/>
                  }) : category && <p>No tour packages available under {category}. <Button onClick={()=>window.location.replace('/packages')} component="p">Reset</Button></p>
                } 
                  
              {!search &&
              <>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image={Train}/>
             <Package price={3000} image={America} title="America – 2 Days in Lake Tahoe" location="America" duration="7 days"/>
             <Package price={4500} title="7 DAYS IN ZURICH, ZERMATT" location="Switzerland" duration="7 days" image={Bridge}/>
             </>
             }
            </Grid>

        </Container>
    </Wrapper>
    )
}