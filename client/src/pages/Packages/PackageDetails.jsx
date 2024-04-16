import Wrapper from "../../layouts/Wrapper";
import { Box, Container, Stack, Typography, Grid, Divider, Button } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { CalendarMonth, LocationOn, LocationSearching, Timer, People, Done} from "@mui/icons-material";
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
       <Container maxWidth sx={{marginBottom:3, marginTop:{xs:12,sm:28,md:0}}}>
        <Stack direction="row" spacing={1}>
        <LocationSearching fontSize="large"/>
        <Typography variant="h4" fontWeight="bold">{data.title}</Typography>
        </Stack>
       </Container>
       </Box>
       <Container  maxWidth sx={{position:"relative", backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
        <Box display={{xs:"block",sm:"flex", md:"flex"}}>

            <Grid direction="column" width="50%" container gap={4}>
                <Stack direction="row" spacing={1}>
                <Timer/>
                <Typography color="inherit" variant="body1">{data.duration}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <LocationOn/>
                <Typography color="inherit" variant="body1">{data.location}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <CalendarMonth/>
                <Typography color="inherit" variant="body1">{data.startdate} - {data.endate}</Typography>
                </Stack>
            </Grid>

            <Grid direction="column" container gap={4}>
                <Stack direction="row" spacing={1}>
                <CalendarMonth/>
                <Typography color="inherit" variant="body1">Deadline: {data.deadline}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <People/>
                <Typography color="inherit" variant="body1">Max. {data.maximum}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <People/>
                <Typography color="inherit" variant="body1">Min. {data.minimum}</Typography>
                </Stack>
            </Grid>

            <Grid position={{xs:"relative",sm:"absolute",md:"absolute"}} container width={{xs:"100%",sm:"40%",md:"40%"}} right={{sm:0, md:10}} marginTop={{xs:3,sm:0,md:0}} top={{xs:0,sm:-280,md:-250,lg:-250,xl:-230}} bgcolor="white" direction="column">
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="black" padding={1}>
                    <Typography color="whitesmoke" variant="body1">{data && data.promotion} % off</Typography>
                 </Box>
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="#2196f3" padding={3}>
                    <Typography color="whitesmoke" variant="h3">$ {data && Number(data.price).toLocaleString()}</Typography>
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
           </Box>

           <Grid direction="column" container gap={4} marginTop={4}>
            <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Description</Typography>
           <Typography color="inherit" variant="body1">{data.description}</Typography>
           <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Activities</Typography>
           <Grid xs={12} sm={6} md={6} container gap={4}>
           {data && data.activity && data.activity.length > 0 && data.activity.map((item)=>{
                 return  <Stack direction="row" key={item}><Done fontSize="small" color="primary"/><Typography color="inherit" variant="body1">{item}</Typography></Stack>
            })}
           </Grid>
      
        
           </Grid>

       
        </Container>
    </Wrapper>
    )
}