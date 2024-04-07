import { useState } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function CreatePackage(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [activities, setActivities] = useState([])
    const [preview,setPreview] = useState('')
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
        setLoading(true)
        const cover = await handleFileUpload(image)
        const data = {...tour, poster:cover.url, activity:activities}
        await client.post('/new', data).then((response)=>{
            setLoading(false)
             if(response.data.success){
                Swal.fire('Success', response.data.message, 'success')
                navigate('/tourpackages')
             }
        })
    }
    return <AdminDashboard>
           <BreadCrumb cap1="Tours" cap2="Add Package"/>
           <Box component="form" onSubmit={handleSubmit} marginY={2} padding={4} bgcolor="whitesmoke">
           <BasicInput onChange={handleUpload} required type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             {preview && <Box component="img" marginBottom={2} src={preview} alt="preview" height={200} width={200} sx={{objectFit:"cover"}}/>}
            <BasicInput required lbl="Package Title" name="title" onChange={handleChange}/>
            <CustomSelect required lbl="Destination Category" value={tour.category} name="category" onChange={handleChange}>
                <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
            </CustomSelect>
            <BasicInput required lbl="Location" name="location" onChange={handleChange}/>
            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>Activities</Typography>
             <CheckBox label="Swimming" onChange={()=>handleCheckboxChange('Swimming')}/>
             <CheckBox label="Sightseeing" onChange={()=>handleCheckboxChange('Sightseeing')}/>
             <CheckBox label="Hiking" onChange={()=>handleCheckboxChange('Hiking')}/>
             <CheckBox label="Ski" onChange={()=>handleCheckboxChange('Ski')}/>
             <CheckBox label="Paragliding" onChange={()=>handleCheckboxChange('Paragliding')}/>
             <CheckBox label="Parachuting" onChange={()=>handleCheckboxChange('Parachuting')}/>
             <CheckBox label="Kayaking" onChange={()=>handleCheckboxChange('Swimming')}/>
             <CheckBox label="Baloon Safaris" onChange={()=>handleCheckboxChange('Baloon Safaris')}/>
             <CheckBox label="Game Drive" onChange={()=>handleCheckboxChange('Game Drive')}/>
            <Typography variant="body1" color="primary" marginY={2} fontSize={14.5}>Number of people </Typography>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Maximum" type="number" name="maximum" onChange={handleChange}/>
            <BasicInput lbl="Minimum" type="number" name="minimum" onChange={handleChange}/>
            </Stack>
            <BasicInput required lbl="Price" type="number" name="price" onChange={handleChange}/>
            <BasicInput lbl="Promotion (%)" placeholder="e.g 30" type="number" name="promotion" onChange={handleChange}/>
            <BasicInput required lbl="Duration" name="duration" onChange={handleChange}/>
            <Stack direction="row" gap={2}>
            <BasicInput required lbl="Start Date" type="date" name="startdate" onChange={handleChange}/>
            <BasicInput required lbl="End Date" type="date" name="endate" onChange={handleChange}/>
            </Stack>
            <BasicInput lbl="Deadline" type="date" helperText="Booking / Payment deadline" name="deadline" onChange={handleChange}/>
            <BasicInput lbl="Description" multiline rows={6} name="description" onChange={handleChange}/>
             {loading ? <Loader/> :
            <Button type="submit" variant="contained">Submit</Button>}
           </Box>
    </AdminDashboard>
}