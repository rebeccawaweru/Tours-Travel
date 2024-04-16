import { useState } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'
export default function CreatePackage(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [activities, setActivities] = useState([])
    const [preview,setPreview] = useState('')
    const [image, setImage] = useState('')
    const [country,setCountry] = useState('')
    const [region,setRegion] = useState('')
    const [tour, setTour] = useState({
        title:"",
        category:"",
        location:"",
        hotel:"",
        minimum:0,
        maximum:0,
        price:0,
        promotion:0,
        days:0,
        nights:0,
        startdate:"",
        endate:"",
        deadline:"",
        description:"",
        currency:""
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
        const data = {...tour, country:country,region:region,poster:cover.secure_url, activity:activities}
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
            classes="custom-select"
            value={country}
            onChange={(val) => setCountry(val)} />
              <RegionDropdown
            classes="custom-select"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)} />
            </Stack>

            <BasicInput lbl="Location" name="location" onChange={handleChange}/>

           <BasicInput lbl="Hotel" name="hotel" onChange={handleChange}/>
           <Stack direction="row" gap={2}>
            <BasicInput required lbl="Price" type="number" name="price" onChange={handleChange}/>
            <CustomSelect required lbl="Currency" value={tour.currency} name="currency" onChange={handleChange}>
                <MenuItem value="KES">KES</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EURO">EURO</MenuItem>
                <MenuItem value="RAND">RANDS</MenuItem>
            </CustomSelect>
            </Stack>

            <Stack direction="row" gap={2}>
            <BasicInput required type="number" placeholder="e.g 2" lbl="Nights" name="nights" onChange={handleChange}/>
            <BasicInput lbl="Days" type="number" placeholder="e.g 2" name="days" onChange={handleChange}/>
             </Stack>
            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>Activities</Typography>
            <CheckBox label="Honeymoon" onChange={()=>handleCheckboxChange('Honeymoon')}/>
            <CheckBox label="Anniversaries" onChange={()=>handleCheckboxChange('Anniversaries')}/>
            <CheckBox label="City Tours" onChange={()=>handleCheckboxChange('City Tours')}/>
            <CheckBox label="Cruises" onChange={()=>handleCheckboxChange('Cruises')}/>
             <CheckBox label="Swimming" onChange={()=>handleCheckboxChange('Swimming')}/>
             <CheckBox label="Sightseeing" onChange={()=>handleCheckboxChange('Sightseeing')}/>
             <CheckBox label="Hiking" onChange={()=>handleCheckboxChange('Hiking')}/>
             <CheckBox label="Ski" onChange={()=>handleCheckboxChange('Ski')}/>
             <CheckBox label="Paragliding" onChange={()=>handleCheckboxChange('Paragliding')}/>
             <CheckBox label="Parachuting" onChange={()=>handleCheckboxChange('Parachuting')}/>
             <CheckBox label="Kayaking" onChange={()=>handleCheckboxChange('Swimming')}/>
             <CheckBox label="Baloon Safaris" onChange={()=>handleCheckboxChange('Baloon Safaris')}/>
             <CheckBox label="Game Drive" onChange={()=>handleCheckboxChange('Game Drive')}/>
             <CheckBox label="Sport academies" onChange={()=>handleCheckboxChange('Sport academies')}/>
             <CheckBox label="Stadia Visits" onChange={()=>handleCheckboxChange('Stadia Visits')}/>
             <CheckBox label="Olympics" onChange={()=>handleCheckboxChange('Olympics')}/>
             <CheckBox label="Formula One" onChange={()=>handleCheckboxChange('Formula One')}/>
            <Typography variant="body1" color="primary" marginY={2} fontSize={14.5}>Number of people </Typography>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Maximum" type="number" name="maximum" onChange={handleChange}/>
            <BasicInput lbl="Minimum" type="number" name="minimum" onChange={handleChange}/>
            </Stack>

           

            <BasicInput lbl="Promotion (%)" placeholder="e.g 30" type="number" name="promotion" onChange={handleChange}/>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Start Date" type="date" name="startdate" onChange={handleChange}/>
            <BasicInput lbl="End Date" type="date" name="endate" onChange={handleChange}/>
            </Stack>
            <BasicInput lbl="Deadline" type="date" helperText="Valid Till" name="deadline" onChange={handleChange}/>
            <BasicInput lbl="Description" multiline rows={6} name="description" onChange={handleChange}/>
             {loading ? <Loader/> :
            <Button type="submit" variant="contained">Submit</Button>}
           </Box>
    </AdminDashboard>
}