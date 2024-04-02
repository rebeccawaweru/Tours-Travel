import { useState } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
export default function CreatePackage(){
    const [activities, setActivities] = useState([])
    const [preview,setPreview] = useState('')
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
    }
    return <AdminDashboard>
           <BreadCrumb cap1="Tours" cap2="Add Package"/>
           <Box component="form" marginY={2} padding={4} bgcolor="whitesmoke">
            <BasicInput onChange={handleUpload} required type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             <Box component="img" src={preview} alt="preview" height={100} width={100}/>
            <BasicInput required lbl="Package Name" name="title" onChange={handleChange}/>
            <CustomSelect required lbl="Destination Category" name="category" onChange={handleChange}>
                <MenuItem value="Africa">Local Travels</MenuItem>
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
            <Button type="submit" variant="contained">Submit</Button>
           </Box>
    </AdminDashboard>
}