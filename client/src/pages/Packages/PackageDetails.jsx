import React from 'react';
import Wrapper from "../../layouts/Wrapper";
import { Box, Container,Table, TableHead, TableRow, TableCell, Stack, Typography, Grid, Divider, Button, Paper, TableBody } from "@mui/material";
import { CalendarMonth, LabelImportant, Public, LocationOn,  Timer, People,TrendingUp} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasicInput,Loader } from "../../components";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../../context/currency";
import {currencyConverter } from '../../utils/helpers';
import { getPackages } from "../../reducers/packageSlice";
import {useDispatch, useSelector} from 'react-redux'
export default function PackageDetails(){
  const dispatch = useDispatch()
  const {packages} = useSelector((state) => state.package)
  const {id} = useParams()
  const data = packages.filter(item => item._id === id)[0] || {}
  const {t} = useTranslation()
    const { selectedCurrency,conversionRates} = useCurrency();
    const [finalLocation, setFinalLocation] = React.useState(data.location ? data.location : '')
    const [hotel,setHotel] = useState('Hotel')
    const [price,setPrice] = useState('Price')
    const [excludes,setExcludes] = useState('Excludes')
    const [result, setResult] = React.useState(data.price)
    const img = data.poster ? data.poster : 'https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485110/packagebg_m0y7fg.jpg'
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
      fullname:"",
      email:"",
      phone:"",
      message:""
    })
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
                subject:`${data.title} Package Enquiry`

              },
            ).then(()=>{
               // console.log(res)
               setValues({fullname:"", email:"", phone:"", message:""})
               Swal.fire('SUCCESS', 'Your enquiry has been received.', 'success')
            }).catch((error)=>{
              Swal.fire('ERROR', 'An error occured.Please try again.', 'error')
            })
         setLoading(false)
   }
    useEffect(()=>{
       if (!packages || packages.length === 0) {
        dispatch(getPackages())
       }
    },[packages])
    React.useEffect(() => {
      const convertPrice = async()=>{
        try {
          if(selectedCurrency !== 'KES') {
            const pr = await currencyConverter(selectedCurrency,data.price,conversionRates)
            const hotelpr = data.hotels.map((hotel) => currencyConverter(selectedCurrency, Number(hotel.price.replace(/,/g,'')),conversionRates))
            console.log(hotelpr)
            setResult((Math.round(pr)))
          } else {
             setResult(data.price)
          }
    
        } catch (error) {
          console.log(error)
        }
      }
      convertPrice()
  },[selectedCurrency,data.price, conversionRates])

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
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
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
                <Typography color="inherit" variant="body1">{data.nights} {t("details.night")} {data.days} {t("details.days")} </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                <LocationOn color="primary"/>
                <Typography color="inherit" variant="body1">{data.region} {finalLocation} </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                <Public color="primary"/>
                <Typography color="inherit" variant="body1"> {data.country}</Typography>
                </Stack>
              </Grid>
                <Grid  direction="column" container gap={4} marginTop={{sm:4, md:0}}>
                <Stack direction="row" spacing={1}>
                <CalendarMonth color="primary"/>
                <Typography color="inherit" variant="body1">{t("details.valid")}: {data.deadline && new Date(data.deadline).toDateString()}</Typography>
                </Stack>
                {data.maximum  ?
                <Stack direction="row" spacing={1}>
                <People color="primary"/>
                <Typography color="inherit" variant="body1">{t("details.max")}. {data.maximum}</Typography>
                </Stack> : null}
                {data.minimum ?
                <Stack direction="row" spacing={1}>
                <People color="primary"/>
                <Typography color="inherit" variant="body1">{t("details.min")}. {data.minimum}</Typography>
                </Stack> : null}

                  </Grid>
             </Stack>
             {data.hotels && data.hotels.length > 0 && 
             <Table>
              <TableHead>
               <TableRow>
                  <TableCell>{hotel}</TableCell>
                  <TableCell>{price}</TableCell>
               </TableRow>
              </TableHead>
              <TableBody>
               {data.hotels.map((hotel)=>{
                 return <TableRow
                 key={hotel.hotelname}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
               <TableCell component="th" scope="row">
                {hotel.hotelname}
              </TableCell>
              <TableCell>{hotel.currency} {hotel.price.toLocaleString()}</TableCell>
               </TableRow>
               })}
              </TableBody>
            </Table>
            }
            <Grid direction="column" container gap={4} marginTop={2}>
            {data.rates && data.rates.length > 0 &&
            <>
           <Typography variant="h5" fontWeight="bold" color="primary">{t("details.rates")}:</Typography>
           {data.rates && data.rates.length > 0 && data.rates.map((item,index)=> {
              return <Box><Typography key={index} color="inherit" variant="body1">{item.ratename} - {selectedCurrency} {item.pricerate && (Math.round(item.pricerate)).toLocaleString()}</Typography><hr></hr></Box>
           })}
           </>}
            <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">{t("details.includes")}:</Typography>
           {data.inclusives && data.inclusives.map((item,index)=> {
              return <Stack direction="row" spacing={1}><LabelImportant color="primary"/><Typography key={index} color="inherit" variant="body1">{item.desc}</Typography></Stack>
           })}
           {(data.exclusives && data.exclusives.length > 0) ?
           <>
           <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">{excludes}:</Typography>
           {data.exclusives.map((item,index)=> {
              return <Stack direction="row" spacing={1}><LabelImportant color="primary"/><Typography key={index} color="inherit" variant="body1">{item.desc}</Typography></Stack>
           })}
           </>
         : null}
       <Divider></Divider>
           <Typography variant="h5" fontWeight="bold" color="primary">{t("details.activity")}</Typography>
           <Box display="flex" flexWrap="wrap" gap={2} marginBottom={2}>
           {data && data.activity && data.activity.length > 0 && data.activity.map((item)=>{
                 return  <Stack direction="row" key={item}><TrendingUp fontSize="small" color="primary"/><Typography color="inherit" variant="body1">{item}</Typography></Stack>
            })}
           </Box>
           </Grid>          
            </Grid>
              <Grid height="fit-content"  item container xs={12} md={4} component={Paper} elevation={2} bgcolor="white" direction="column">
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="black" padding={1}>
                    <Typography color="whitesmoke" variant="body1">{data && data.promotion} % {t("details.off")}</Typography>
                 </Box>
                 <Box maxWidth display="flex" justifyContent="center" bgcolor="#2196f3" padding={3}>
                    <Typography color="whitesmoke" variant="h3">{selectedCurrency} {result && (Number(result)).toLocaleString()}</Typography>
                 </Box>
                <Box component="form" onSubmit={handleSubmit} padding={4}>
                <Typography variant="h5" marginBottom={3}>{t("details.interest")} </Typography>
                <BasicInput required lbl={t("details.name")} name="fullname" value={values.fullname} onChange={handleChange}/>
                <BasicInput required lbl={t("details.email")} name="email" value={values.email} onChange={handleChange}/>
                <BasicInput required lbl={t("details.phone")} name="phone" value={values.phone} onChange={handleChange}/>
                <BasicInput required lbl={t("details.enquiry")} name="message" value={values.message} onChange={handleChange} multiline rows={4}/>
                <Box>
                {loading ? <Loader/> : <Button type="submit" variant="contained" sx={{color:"whitesmoke"}}>{t("details.send")}</Button>}
                </Box>
                </Box>
            </Grid>
           </Grid>
        </Container>
    </Wrapper>
    )
}