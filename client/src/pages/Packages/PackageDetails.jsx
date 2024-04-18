import Wrapper from "../../layouts/Wrapper";
import { Box, Container, Stack, Typography, Grid, Divider, Button, Paper } from "@mui/material";
import Sky from '../../assets/packagebg.jpg'
import { CalendarMonth, LabelImportant, Public, LocationOn,  Timer, People,TrendingUp} from "@mui/icons-material";
import { useEffect, useState } from "react";
import client from '../../api/client'
import { useParams } from "react-router-dom";
import { BasicInput,Loader } from "../../components";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export default function PackageDetails(){
     const {id} = useParams()
    const [data,setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
      fullname:"",
      email:"",
      phone:"",
      message:""
    })
    async function getPackage(){
        await client.get(`/${id}`).then((response)=>{
             setData(response.data.package)
        })
      }
   const handleChange = (e) =>{
    setValues(values => ({...values, [e.target.name]:e.target.value}))
   }
   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true);
            await emailjs
            .send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              {
                name: values.fullname,
                phone: values.phone,
                email: values.email,
                message: values.message,
                subject:'Tour Package Enquiry'
              },
            ).then(()=>{
               // console.log(res)
               setValues({fullname:"", email:"", phone:"", message:""})
               Swal.fire('SUCCESS', 'Your enquiry has been received.', 'success')
            }).catch((error)=>{
               // console.log(error)
              Swal.fire('ERROR', 'An error occured.Please try again.', 'error')
            })
           setLoading(false)
       
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
        <Public fontSize="large"/>
        <Typography variant="h4" fontWeight="bold">{data.title}</Typography>
        </Stack>
       </Container>

       </Box>
       <Container  maxWidth sx={{position:"relative", backgroundColor: 'whitesmoke',paddingY:"50px", marginTop:{xs:-4,md:-20}}}>
        <Grid container>

            <Grid item container xs={12} md={8} direction="column" gap={4}>
               <Stack direction={{xs:"column",md:"row"}}>
            <Grid  direction="column" container gap={4}>
                <Stack direction="row" spacing={1}>
                <Timer color="primary"/>
                <Typography color="inherit" variant="body1">{data.nights}nights {data.days}days</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <LocationOn color="primary"/>
                <Typography color="inherit" variant="body1">{data.hotel} {data.location} </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <Public color="primary"/>
                <Typography color="inherit" variant="body1">{data.region} {data.country}</Typography>
                </Stack>
              </Grid>

                <Grid  direction="column" container gap={4}>
                <Stack direction="row" spacing={1}>
                <CalendarMonth color="primary"/>
                <Typography color="inherit" variant="body1">Valid Till: {data.deadline && new Date(data.deadline).toDateString()}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <People color="primary"/>
                <Typography color="inherit" variant="body1">Max. {data.maximum || '-'}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                <People color="primary"/>
                <Typography color="inherit" variant="body1">Min. {data.minimum || '-'}</Typography>
                </Stack>
                  </Grid>

             </Stack>
            <Grid direction="column" container gap={4} marginTop={2}>
            {data.rates && data.rates.length > 0 &&
            <>
           <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Rates:</Typography>
           {data.rates && data.rates.length > 0 && data.rates.map((item,index)=> {
              return <Box><Typography key={index} color="inherit" variant="body1">{item.ratename} - {item.pricerate}</Typography><hr></hr></Box>
           })}
           </>}
            <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Includes:</Typography>
           {data.inclusives && data.inclusives.map((item,index)=> {
              return <Stack direction="row" spacing={1}><LabelImportant color="primary"/><Typography key={index} color="inherit" variant="body1">{item.desc}</Typography></Stack>
           })}
           
           <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">Activities</Typography>
           <Box display="flex" flexWrap="wrap" gap={2}>
           {data && data.activity && data.activity.length > 0 && data.activity.map((item)=>{
                 return  <Stack direction="row" key={item}><TrendingUp fontSize="small" color="primary"/><Typography color="inherit" variant="body1">{item}</Typography></Stack>
            })}
           </Box>

           </Grid>          
            </Grid>


              <Grid height="fit-content"  item container xs={12} md={4} component={Paper} elevation={2} bgcolor="white" direction="column">
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="black" padding={1}>
                    <Typography color="whitesmoke" variant="body1">{data && data.promotion} % off</Typography>
                 </Box>
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="#2196f3" padding={3}>
                    <Typography color="whitesmoke" variant="h3">{data.currency} {data && Number(data.price).toLocaleString()}</Typography>
                 </Box>
                <Box component="form" onSubmit={handleSubmit} padding={4}>
                <Typography variant="h5" marginBottom={3}>Are you interested? </Typography>
                <BasicInput required lbl="Name" name="fullname" value={values.fullname} onChange={handleChange}/>
                <BasicInput required lbl="Email" name="email" value={values.email} onChange={handleChange}/>
                <BasicInput required lbl="Phone" name="phone" value={values.phone} onChange={handleChange}/>
                <BasicInput required lbl="Enquiry" name="message" value={values.message} onChange={handleChange} multiline rows={4}/>
                <Box>
                {loading ? <Loader/> : <Button type="submit" variant="contained" sx={{color:"whitesmoke"}}>Send</Button>}
                </Box>

                </Box>
            
            </Grid>


           </Grid>

         

       
        </Container>
    </Wrapper>
    )
}