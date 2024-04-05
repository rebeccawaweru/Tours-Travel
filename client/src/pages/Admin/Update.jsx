import { useState, useEffect } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography, InputLabel } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdatePackage(){
    const {id} = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [activities, setActivities] = useState([])
    const [preview,setPreview] = useState(data.poster)
    const [image, setImage] = useState('')
    const [tour, setTour] = useState({
        title:"",
        category:"",
        location:"",
        minimum:0,
        maximum:0,
        price:0,
        promotion:0,
        duration:"",
        startdate:"",
        endate:"",
        deadline:"",
        description:""
    })
    const handleChange = (e) => {
       setTour((tour) => ({...tour, [e.target.name]:e.target.value}))
    }
    const handleCheckboxChange = (label) => {
        if(activities.includes(label)){
           setActivities(activities.filter(item => item !== label))
        } else {
            setActivities([...activities, label])
        }
    }
    const handleUpload = (e) =>{
       setPreview(URL.createObjectURL(e.target.files[0]))
       setImage(e.target.files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const cover = image ? await handleFileUpload(image) : undefined
        const post = cover ? cover.url : preview
        const newdata = {...tour, poster:post, activity:activities}
        delete newdata._id
        delete newdata.createdAt
        await client.put(`/update/${id}`, newdata).then((response)=>{
             if(response.data.success){
                Swal.fire('Success', response.data.message, 'success')
                navigate('/tourpackages')
             }
        })
    }
    useEffect(()=>{
       client.get('/find/'+id).then((response)=>{
        setTour(response.data.package)
        setPreview(response.data.package.poster)
        setActivities(response.data.package.activity)
       })
    },[id])
    return <AdminDashboard>
           <BreadCrumb cap1="Tours" cap2="Update Package"/>
           <Box component="form" onSubmit={handleSubmit} marginY={2} padding={4} bgcolor="whitesmoke">
           <BasicInput onChange={handleUpload}  type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             {preview && <Box component="img" marginBottom={2} src={preview} alt="preview" height={200} width={200} sx={{objectFit:"cover"}}/>}

            <BasicInput  lbl="Package Name" value={tour.title} name="title" onChange={handleChange}/>
            <CustomSelect lbl="Destination Category" displayEmpty renderValue={()=>tour.category} value={tour.category} name="category" onChange={handleChange}>
               <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
            </CustomSelect>
            <BasicInput  lbl="Location" value={tour.location} name="location" onChange={handleChange}/>
            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>Activities</Typography>
             <CheckBox checked={activities.includes('Swimming')} label="Swimming" onChange={()=>handleCheckboxChange('Swimming')}/>
             <CheckBox checked={activities.includes('Sightseeing')} label="Sightseeing" onChange={()=>handleCheckboxChange('Sightseeing')}/>
             <CheckBox checked={activities.includes('Hiking')} label="Hiking" onChange={()=>handleCheckboxChange('Hiking')}/>
             <CheckBox checked={activities.includes('Ski')} label="Ski" onChange={()=>handleCheckboxChange('Ski')}/>
             <CheckBox checked={activities.includes('Paragliding')} label="Paragliding" onChange={()=>handleCheckboxChange('Paragliding')}/>
             <CheckBox checked={activities.includes('Parachuting')}  label="Parachuting" onChange={()=>handleCheckboxChange('Parachuting')}/>
             <CheckBox checked={activities.includes('Kayaking')} label="Kayaking" onChange={()=>handleCheckboxChange('Kayaking')}/>
             <CheckBox checked={activities.includes('Baloon Safaris')} label="Baloon Safaris" onChange={()=>handleCheckboxChange('Baloon Safaris')}/>
             <CheckBox checked={activities.includes('Game Drive')} label="Game Drive" onChange={()=>handleCheckboxChange('Game Drive')}/>
            <Typography variant="body1" color="primary" marginY={2} fontSize={14.5}>Number of people </Typography>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Maximum" type="number" value={tour.maximum} name="maximum" onChange={handleChange}/>
            <BasicInput lbl="Minimum" type="number" value={tour.minimum} name="minimum" onChange={handleChange}/>
            </Stack>
            <BasicInput  lbl="Price" type="number" value={tour.price} name="price" onChange={handleChange}/>
            <BasicInput lbl="Promotion (%)"  type="number" value={tour.promotion} name="promotion" onChange={handleChange}/>
            <BasicInput  lbl="Duration" value={tour.duration} name="duration" onChange={handleChange}/>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Start Date" type="date" value={tour.startdate} name="startdate" onChange={handleChange}/>
            <BasicInput lbl="End Date" type="date" value={tour.endate} name="endate" onChange={handleChange}/>
            </Stack>
            <BasicInput lbl="Deadline" type="date" helperText="Booking / Payment deadline" value={tour.deadline} name="deadline" onChange={handleChange}/>
            <BasicInput lbl="Description" multiline rows={6} value={tour.description} name="description" onChange={handleChange}/>
            <Button type="submit" variant="contained">Update</Button>
           </Box>
    </AdminDashboard>
}