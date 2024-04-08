import { useState, useEffect } from "react";
import { BasicInput, CustomSelect, BreadCrumb, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateReferal(){
    const {id} = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [preview,setPreview] = useState(data.poster)
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
        setLoading(true)
        const cover = image ? await handleFileUpload(image) : undefined
        const post = cover ? cover.secure_url : preview
        const newdata = {...tour, poster:post}
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
       })
    },[id])
    return <AdminDashboard>
           <BreadCrumb cap1="Tours" cap2="Update Package"/>
           <Box component="form" onSubmit={handleSubmit} marginY={2} padding={4} bgcolor="whitesmoke">
           <BasicInput onChange={handleUpload}  type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             {preview && <Box component="img" marginBottom={2} src={preview} alt="preview" height={200} width={200} sx={{objectFit:"cover"}}/>}
             <BasicInput  lbl="Client" value={tour.client} name="client" onChange={handleChange}/>
             <BasicInput  lbl="Phone" value={tour.phone} name="phone" onChange={handleChange}/>
            <BasicInput  lbl="Package Title" value={tour.title} name="title" onChange={handleChange}/>
            <CustomSelect lbl="Destination Category" displayEmpty renderValue={()=>tour.category} value={tour.category} name="category" onChange={handleChange}>
               <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
            </CustomSelect>
            <BasicInput  lbl="Location" value={tour.location} name="location" onChange={handleChange}/>
            <BasicInput  lbl="Price" type="number" value={tour.price} name="price" onChange={handleChange}/>
            <BasicInput  lbl="Duration" value={tour.duration} name="duration" onChange={handleChange}/>
            <BasicInput lbl="Charge per click" value={tour.charge} type="number" name="charge" onChange={handleChange}/>
            <BasicInput lbl="External Website Link" value={tour.link} name="link" onChange={handleChange}/>
            {loading ? <Loader/> :
           <Button type="submit" variant="contained">Update</Button>}
           </Box>
    </AdminDashboard>
}