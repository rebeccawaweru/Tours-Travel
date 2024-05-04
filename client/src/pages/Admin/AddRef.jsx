import { useState } from "react";
import { BasicInput, CustomSelect, BreadCrumb, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Typography, Stack, Button, MenuItem } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'

export default function AddReferal(){
    const navigate = useNavigate()
    const [preview,setPreview] = useState('')
    const [loading, setLoading] = useState(false)
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
        currency:"KES"
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
        const cover = await handleFileUpload(image)
        const data = {...tour,country:country,region:region, poster:cover.secure_url}
        await client.post('/new/referral', data).then((response)=>{
            setLoading(false)
             if(response.data.success){
                Swal.fire('Success', response.data.message, 'success')
                navigate('/bookings')
             }
        })
    }
    return <AdminDashboard>
           <BreadCrumb cap1="Referrals" cap2="Add Referral"/>
           <Box component="form" onSubmit={handleSubmit} marginY={2} padding={4} bgcolor="whitesmoke">
           <BasicInput onChange={handleUpload} required type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             {preview && <Box component="img" marginBottom={2} src={preview} alt="preview" height={200} width={200} sx={{objectFit:"cover"}}/>}
             <BasicInput required lbl="External Website Link" name="link" onChange={handleChange}/>
             <BasicInput required lbl="Client" name="client" onChange={handleChange}/>
             <BasicInput required lbl="Phone" name="phone" onChange={handleChange}/>
            <BasicInput required lbl="Package Title" name="title" onChange={handleChange}/>
            <CustomSelect required lbl="Destination Category" value={tour.category} name="category" onChange={handleChange}>
            <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
                <MenuItem value="Vacations">Vacations</MenuItem>
                <MenuItem value="Educational Tours">Educational Tours</MenuItem>
                <MenuItem value="Special Tours">Special Tours</MenuItem>
                <MenuItem value="Sporting events">Sporting events</MenuItem>
                <MenuItem value="Charity Tours">Charity Tours</MenuItem>
                <MenuItem value="Wine tasting tours">Wine tasting tours</MenuItem>
                <MenuItem value="Food festivals">Food festivals</MenuItem>
                <MenuItem value="Bird watching explorations">Bird watching explorations</MenuItem>
                <MenuItem value="Sky gliding tours">Sky gliding tours</MenuItem>
            </CustomSelect>
            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>Country / Region</Typography>
            <Stack direction="row" gap={2} marginBottom={3}>
            <CountryDropdown
            classes="custom-select"
            value={country}
            onChange={(val) => setCountry(val)} />
              <RegionDropdown
            classes="custom-select"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)} />
            </Stack>
            <BasicInput required lbl="Location" name="location" onChange={handleChange}/>
            <BasicInput lbl="Hotel" name="hotel" onChange={handleChange}/>
           <Stack direction="row" gap={2}>
            <BasicInput required lbl="Price" type="number" name="price" onChange={handleChange}/>
            <CustomSelect lbl="Currency" value={tour.currency} name="currency" onChange={handleChange}>
                <MenuItem value="KES">KES</MenuItem>
            </CustomSelect>
            </Stack>
           
            <Stack direction="row" gap={2}>
            <BasicInput required type="number" placeholder="e.g 2" lbl="Nights" name="nights" onChange={handleChange}/>
            <BasicInput lbl="Days" type="number" placeholder="e.g 2" name="days" onChange={handleChange}/>
             </Stack>

            <BasicInput required lbl="Charge per click" type="number" name="charge" onChange={handleChange}/>
             {loading ? <Loader/> :
            <Button type="submit" variant="contained">Submit</Button>}
           </Box>
    </AdminDashboard>
}