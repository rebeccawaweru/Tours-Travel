import { useState } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function AddReferal(){
    const navigate = useNavigate()
    const [preview,setPreview] = useState('')
    const [image, setImage] = useState('')
    const [tour, setTour] = useState({
        client:"",
        phone:"",
        title:"",
        category:"",
        location:"",
        price:0,
        duration:"",
        charge:"",
        link:""
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
        const cover = await handleFileUpload(image)
        const data = {...tour, poster:cover.url}
        await client.post('/new/referral', data).then((response)=>{
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
             
             <BasicInput required lbl="Client" name="client" onChange={handleChange}/>
             <BasicInput required lbl="Phone" name="phone" onChange={handleChange}/>
            <BasicInput required lbl="Package Title" name="title" onChange={handleChange}/>
            <CustomSelect required lbl="Destination Category" value={tour.category} name="category" onChange={handleChange}>
                <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
            </CustomSelect>
            <BasicInput required lbl="Location" name="location" onChange={handleChange}/>
            <BasicInput required lbl="Price" type="number" name="price" onChange={handleChange}/>
            <BasicInput required lbl="Duration" name="duration" onChange={handleChange}/>
            <BasicInput required lbl="Charge per click" type="number" name="charge" onChange={handleChange}/>
            <BasicInput required lbl="External Website Link" name="link" onChange={handleChange}/>
            <Button type="submit" variant="contained">Submit</Button>
           </Box>
    </AdminDashboard>
}