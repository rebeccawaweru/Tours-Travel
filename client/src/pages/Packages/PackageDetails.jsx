import Wrapper from "../../layouts/Wrapper";
import { Box, Container, Stack, Typography, Grid, Divider, Button } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { CalendarMonth, LabelImportant, Public, LocationOn, LocationSearching, Timer, People, Done} from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
import { useParams } from "react-router-dom";
import { BasicInput } from "../../components";

export default function PackageDetails(){
     const {id} = useParams()
    const [data,setData] = useState({})
    async function getPackage(){
        await client.get(`/${id}`).then((response)=>{
             setData(response.data.package)
        })
      }
    useEffect(()=>{
        getPackage()
    },[id])
    return (
        <Wrapper>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"whitesmoke",
        justifyContent:"center",
        // alignItems:"start",
        height:{xs:"60vh",sm:"80vh",md:"100vh", lg:"120vh", xl:"120vh"},
        width:"100%",
        backgroundSize: 'cover',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       }}>
       <Container  maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:0}}}>
        <Stack justifyContent="center" direction="row" spacing={1}>
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold">{data.title}</Typography>
        </Stack>
       </Container>

       </Box>
       <Container  maxWidth sx={{position:"relative", backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
        <Grid container>

            <Grid item container xs={12} md={8} direction="column" gap={4}>

                <Stack direction="row" spacing={1}>
                <Timer/>
                <Typography color="inherit" variant="body1">{data.nights}nights {data.days}days</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <LocationOn/>
                <Typography color="inherit" variant="body1">{data.hotel} {data.location} </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <Public/>
                <Typography color="inherit" variant="body1">{data.region} {data.country}</Typography>
                </Stack>

                <Grid  direction="column" container gap={4}>
                <Stack direction="row" spacing={1}>
                <CalendarMonth/>
                <Typography color="inherit" variant="body1">Valid Till: {data.deadline && new Date(data.deadline).toLocaleDateString()}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <People/>
                <Typography color="inherit" variant="body1">Max. {data.maximum || '-'}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <People/>
                <Typography color="inherit" variant="body1">Min. {data.minimum || '-'}</Typography>
                </Stack>

            </Grid>

            <Grid direction="column" container gap={4} marginTop={4}>
            {data.rates &&
            <>
           <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Rates:</Typography>
           {data.rates && data.rates.map((item,index)=> {
              return <Box><Typography key={index} color="inherit" variant="body1">{item.ratename} - {item.pricerate}</Typography><hr></hr></Box>
           })}
           </>}
            <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Includes:</Typography>
           {data.inclusives && data.inclusives.map((item,index)=> {
              return <Stack direction="row" spacing={1}><LabelImportant/><Typography key={index} color="inherit" variant="body1">{item.desc}</Typography></Stack>
           })}
           
           <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Activities</Typography>
           <Grid xs={12} sm={6} md={6} container gap={4}>
           {data && data.activity && data.activity.length > 0 && data.activity.map((item)=>{
                 return  <Stack direction="row" key={item}><Done fontSize="small" color="primary"/><Typography color="inherit" variant="body1">{item}</Typography></Stack>
            })}
           </Grid>
           </Grid>
           
            </Grid>



        

            <Grid item container xs={12} md={4}  bgcolor="white" direction="column">
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="black" padding={1}>
                    <Typography color="whitesmoke" variant="body1">{data && data.promotion} % off</Typography>
                 </Box>
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="#2196f3" padding={3}>
                    <Typography color="whitesmoke" variant="h3">{data.currency} {data && Number(data.price).toLocaleString()}</Typography>
                 </Box>
                <Box padding={4}>
                <Typography variant="h5" marginBottom={3}>Are you interested? </Typography>
                <BasicInput required lbl="Name"/>
                <BasicInput required lbl="Email"/>
                <BasicInput required lbl="Phone"/>
                <BasicInput required lbl="Enquiry" multiline rows={4}/>
                <Box>
                <Button variant="contained" sx={{color:"whitesmoke"}}>Send</Button>
                </Box>

                </Box>
            
            </Grid>


           </Grid>

         

       
        </Container>
    </Wrapper>
    )
}