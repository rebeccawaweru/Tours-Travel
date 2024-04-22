import { useState, useEffect } from "react";
import { BasicInput, CustomSelect, BreadCrumb, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Typography, Stack } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateReferal(){
    const {id} = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [preview,setPreview] = useState(data.poster)
    const [image, setImage] = useState('')
    const [country,setCountry] = useState('')
    const [region,setRegion] = useState('')
    const [tour, setTour] = useState({
      client:"",
      phone:"",
      title:"",
      category:"",
      hotel:"",
      location:"",
      price:0,
      days:0,
      nights:0,
      charge:"",
      link:"",
      currency:""
    })
    const handleChange = (e) => {
       setTour((tour) => ({...tour, [e.target.name]:e.target.value}))
    }
    const handleUpload = (e) =>{
       setPreview(URL.createObjectURL(e.target.files[0]))
       setImage(e.target.files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const cover = image ? await handleFileUpload(image) : undefined
        const post = cover ? cover.secure_url : preview
        const newdata = {...tour, country:country, region:region, poster:post}
        delete newdata._id
        delete newdata.createdAt
        await client.put(`/update/referral/${id}`, newdata).then((response)=>{
             setLoading(false)
             if(response.data.success){
                Swal.fire('Success', response.data.message, 'success')
                navigate('/bookings')
             }
        })
    }
    useEffect(()=>{
       client.get(`/referral/${id}`).then((response)=>{
        setTour(response.data.referral)
        setPreview(response.data.referral.poster)
        setCountry(response.data.referral.country)
        setRegion(response.data.referral.region)
       })
    },[id])
    return <AdminDashboard>
           <BreadCrumb cap1="Tours" cap2="Update Package"/>
           <Box component="form" onSubmit={handleSubmit} marginY={2} padding={4} bgcolor="whitesmoke">
           <BasicInput onChange={handleUpload}  type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             {preview && <Box component="img" marginBottom={2} src={preview} alt="preview" height={200} width={200} sx={{objectFit:"cover"}}/>}
             <BasicInput lbl="External Website Link" value={tour.link} name="link" onChange={handleChange}/>
             <BasicInput  lbl="Client" value={tour.client} name="client" onChange={handleChange}/>
             <BasicInput  lbl="Phone" value={tour.phone} name="phone" onChange={handleChange}/>
            <BasicInput  lbl="Package Title" value={tour.title} name="title" onChange={handleChange}/>
            <CustomSelect lbl="Destination Category" displayEmpty renderValue={()=>tour.category} value={tour.category} name="category" onChange={handleChange}>
               <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
                <MenuItem value="vacation">Vacations</MenuItem>
                <MenuItem value="education">Educational Tours</MenuItem>
                <MenuItem value="special">Special Tours</MenuItem>
                <MenuItem value="sport">Sporting events</MenuItem>
                <MenuItem value="charity">Charity Tours</MenuItem>
                <MenuItem value="wine">Wine tasting tours</MenuItem>
                <MenuItem value="food">Food festivals</MenuItem>
                <MenuItem value="birds">Bird watching explorations</MenuItem>
                <MenuItem value="gliding">Sky gliding tours</MenuItem>
            </CustomSelect>
            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>Country / Region</Typography>
            <Stack direction="row" gap={2} marginBottom={3}>
            <CountryDropdown
            defaultOptionLabel={country}
            classes="custom-select"
            value={country}
            onChange={(val) => setCountry(val)} />
              <RegionDropdown
              defaultOptionLabel={region}
            classes="custom-select"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)} />
            </Stack>
            <BasicInput  lbl="Location" value={tour.location} name="location" onChange={handleChange}/>
            <BasicInput  lbl="Hotel" value={tour.hotel} name="hotel" onChange={handleChange}/>
            <Stack direction="row" gap={2}>
            <BasicInput  lbl="Price" type="number" value={tour.price} name="price" onChange={handleChange}/>
            <CustomSelect required lbl="Currency" displayEmpty renderValue={()=>tour.currency}  value={tour.currency} name="currency" onChange={handleChange}>
                <MenuItem value="KES">KES</MenuItem>
                <MenuItem value="$">USD</MenuItem>
                <MenuItem value="€">EURO</MenuItem>
                <MenuItem value="ZAR">RANDS</MenuItem>
            </CustomSelect>
            </Stack>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Nights" type="number" value={tour.nights}  name="nights" onChange={handleChange}/>
            <BasicInput lbl="Days" type="number" value={tour.days} name="days" onChange={handleChange}/>
             </Stack>

            <BasicInput lbl="Charge per click" value={tour.charge} type="number" name="charge" onChange={handleChange}/>
            {loading ? <Loader/> :
           <Button type="submit" variant="contained">Update</Button>}
           </Box>
    </AdminDashboard>
}