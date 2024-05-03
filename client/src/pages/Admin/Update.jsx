import { useState, useEffect } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography, Grid } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'
import { DeleteForever } from "@mui/icons-material";

export default function UpdatePackage(){
    const {id} = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [rate, setRate] = useState({
        ratename: '',
        pricerate: 0
    });
    const [rates, setRates] = useState([])
    const [hotel,setHotel] = useState({
        hotelname:"",
        price:"",
        currency:""
    })
    const [hotels,setHotels] = useState([])
    const [inclusive,setInclusive] = useState({
        desc:''
    })
    const [inclusives,setInclusives] = useState([])
    const [exclude,setExclude] = useState({
        desc:''
    })
    const [exclusives,setExclusives] = useState([])
    const [activities, setActivities] = useState([])
    const [preview,setPreview] = useState(data.poster)
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
        currency:""
    })
    const handleChange = (e) => {
       setTour((tour) => ({...tour, [e.target.name]:e.target.value}))
    }
    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setRate((prevRate) => ({
            ...prevRate,
            [name]: name === 'pricerate' ? parseFloat(value) : value
        }));
    };
    const handleChange3 = (e) => {
        const { name, value } = e.target;
        setInclusive((prevInc) => ({
            ...prevInc,
            [name]:value
        }));
    };
    const handleChange4 = (e) => {
        const { name, value } = e.target;
        setHotel((prev) => ({
            ...prev,
            [name]:value
        }));
    };

    const handleChange5 = (e) => {
        const { name, value } = e.target;
        setExclude((prev) => ({
            ...prev,
            [name]:value
        }));
    };
     // Handle button click
     const handleAdd = () => {
        // Add the rate object to the rates array
        setRates((prevRates) => [...prevRates, rate]);
        setRate({
            ratename: '',
            pricerate: 0
        });

    };
    const handleAdd2 = () => {
        // Add the rate object to the rates array
        setInclusives((prevInc) => [...prevInc, inclusive]);
        // Optionally, clear the input fields after adding
        setInclusive({
            desc:''
        })
    };
    const handleAdd3 = () => {
        // Add the rate object to the rates array
        setHotels((prevHotels) => [...prevHotels, hotel]);
        setHotel({
            hotelname:"",
            price:"",
            currency:""
        });
    };
    const handleAdd4 = () => {
        // Add the rate object to the rates array
        setExclusives((prevExclusives) => [...prevExclusives, exclude]);
        setExclude({
            desc:""
        });
    };
    const handleDelete = (index) => {
        // Remove the rate at the specified index
        setRates((prevRates) => prevRates.filter((_, i) => i !== index));
    };
    const handleDelete2 = (index) => {
        // Remove the rate at the specified index
        setInclusives((prevInc) => prevInc.filter((_, i) => i !== index));
    };
    const handleDelete3 = (index) => {
        setHotels((prevHotels) => prevHotels.filter((_, i) => i !== index));
    };
    const handleCheckboxChange = (label) => {
        if(activities.includes(label)){
           setActivities(activities.filter(item => item !== label))
        } else {
            setActivities([...activities, label])
        }
    }
    const handleDelete4 = (index) => {
        // Remove the rate at the specified index
        setExclusives((prevEx) => prevEx.filter((_, i) => i !== index));
    };
    const handleUpload = (e) =>{
       setPreview(URL.createObjectURL(e.target.files[0]))
       setImage(e.target.files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const cover = image ? await handleFileUpload(image) : undefined
        const post = cover ? cover.secure_url : preview
        const newdata = {...tour,country:country,region:region, poster:post,rates:rates, hotels:hotels, inclusives:inclusives, activity:activities}
        delete newdata._id
        delete newdata.createdAt
        await client.put(`/update/${id}`, newdata).then((response)=>{
            setLoading(false)
             if(response.data.success){
                Swal.fire('Success', response.data.message, 'success')
                navigate('/tourpackages')
             }
        })
    }
    useEffect(()=>{
       client.get(`/${id}`).then((response)=>{
        setTour(response.data.package)
        setCountry(response.data.package.country)
        setRegion(response.data.package.region)
        setPreview(response.data.package.poster)
        setRates(response.data.package.rates)
        setInclusives(response.data.package.inclusives)
        setExclusives(response.data.package.exclusives)
        setActivities(response.data.package.activity)
        setHotels(response.data.package.hotels)
       })
    },[id])
    return <AdminDashboard>
           <BreadCrumb cap1="Tours" cap2="Update Package"/>
           <Box component="form" onSubmit={handleSubmit} marginY={2} padding={4} bgcolor="whitesmoke">
           <BasicInput onChange={handleUpload}  type="file" lbl="Poster" helperText="Ad photo of the tour package"/>
             {preview && <Box component="img" marginBottom={2} src={preview} alt="preview" height={200} width={200} sx={{objectFit:"cover"}}/>}

            <BasicInput  lbl="Package Title" value={tour.title} name="title" onChange={handleChange}/>
            <CustomSelect lbl="Destination Category" displayEmpty renderValue={()=>tour.category} value={tour.category} name="category" onChange={handleChange}>
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
            <BasicInput lbl="Location" value={tour.location} name="location" onChange={handleChange}/>

            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>+ Hotels</Typography>
           {hotels.length > 0 ? 
                <Grid container direction="column" gap={2} marginBottom={2}>
                    {hotels.map((hotel, index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Typography>{hotel.hotelname} - {hotel.price} {hotel.currency}</Typography> 
                            <DeleteForever onClick={() => handleDelete3(index)} />
                        </Stack>
                    ))}
                </Grid> 
                : null
            }
           <Stack direction="row" gap={2}>
           <BasicInput lbl="Hotel" name="hotelname" value={hotel.hotelname} onChange={handleChange4} helperText="Click 'Save' to add hotel"/>
           <BasicInput lbl="Price" name="price" value={hotel.price} onChange={handleChange4}/>
           <CustomSelect lbl="Currency" value={hotel.currency} name="currency" onChange={handleChange4}>
                <MenuItem value="KES">KES</MenuItem>
                <MenuItem value="$">USD</MenuItem>
                <MenuItem value="€">EURO</MenuItem>
                <MenuItem value="ZAR">RANDS</MenuItem>
            </CustomSelect>
            <Typography marginTop={3} onClick={handleAdd3} sx={{cursor:"pointer"}}>Save</Typography>
            </Stack>

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

             <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>+ Add Rates</Typography>
            {rates.length > 0 ? 
                <Grid container direction="column" gap={2} marginBottom={2}>
                    {rates.map((rate,index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Typography>{rate.ratename} - {Number(rate.pricerate).toLocaleString() || 0}</Typography> 
                            <DeleteForever onClick={() => handleDelete(index)} />
                        </Stack>
                    ))}
                </Grid> 
                : null
            }
            <Stack direction={{xs:"column",md:"row"}} gap={2}>  
            <BasicInput placeholder="e.g CHILDREN" lbl="Rate title" name="ratename"   value={rate.ratename} helperText="Please ensure you click 'Save' for each rate" onChange={handleChange2}/>
            <BasicInput type="number"  lbl="Price Rate" name="pricerate"   value={rate.pricerate} onChange={handleChange2}/>
            <Typography marginTop={3} onClick={handleAdd} sx={{cursor:"pointer"}}>Save</Typography>
            </Stack>

            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>The Rates Include:</Typography>
            {inclusives.length > 0 ? 
                <Grid container direction="column" gap={2} marginBottom={2}>
                    {inclusives.map((rate,index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Typography>{rate.desc}</Typography> 
                            <DeleteForever onClick={() => handleDelete2(index)} />
                        </Stack>
                    ))}
                </Grid> 
                : null
            }
           
            <Stack direction={{xs:"column",md:"row"}} gap={2}>  
            <BasicInput lbl="Notes" placeholder="e.g Half board meals" multiline rows={3} value={inclusive.desc} name="desc" helperText="Please add each point at a time and click 'Save'" onChange={handleChange3}/>
            <Typography marginTop={3} onClick={handleAdd2} sx={{cursor:"pointer"}}>Save</Typography>
            </Stack>

            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>The Rates Exclude:</Typography>
            {exclusives.length > 0 ? 
                <Grid container direction="column" gap={2} marginBottom={2}>
                    {exclusives.map((rate,index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Typography>{rate.desc}</Typography> 
                            <DeleteForever onClick={() => handleDelete4(index)} />
                        </Stack>
                    ))}
                </Grid> 
                : null
            }
            <Stack direction={{xs:"column",md:"row"}} gap={2}>  
            <BasicInput lbl="Notes" placeholder="e.g Return tickets" multiline rows={3} value={exclude.desc} name="desc" helperText="Please add each point at a time and click 'Save'" onChange={handleChange5}/>
            <Typography marginTop={3} onClick={handleAdd4} sx={{cursor:"pointer"}}>Save</Typography>
            </Stack>

            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>Activities</Typography>
            <CheckBox checked={activities.includes('Honeymoon')} label="Honeymoon" onChange={()=>handleCheckboxChange('Honeymoon')}/>
            <CheckBox checked={activities.includes('Anniversaries')} label="Anniversaries" onChange={()=>handleCheckboxChange('Anniversaries')}/>
            <CheckBox checked={activities.includes('City Tours')} label="City Tours" onChange={()=>handleCheckboxChange('City Tours')}/>
            <CheckBox checked={activities.includes('Cruises')} label="Cruises" onChange={()=>handleCheckboxChange('Cruises')}/>
             <CheckBox checked={activities.includes('Swimming')} label="Swimming" onChange={()=>handleCheckboxChange('Swimming')}/>
             <CheckBox checked={activities.includes('Sightseeing')} label="Sightseeing" onChange={()=>handleCheckboxChange('Sightseeing')}/>
             <CheckBox checked={activities.includes('Hiking')} label="Hiking" onChange={()=>handleCheckboxChange('Hiking')}/>
             <CheckBox checked={activities.includes('Ski')} label="Ski" onChange={()=>handleCheckboxChange('Ski')}/>
             <CheckBox checked={activities.includes('Paragliding')} label="Paragliding" onChange={()=>handleCheckboxChange('Paragliding')}/>
             <CheckBox checked={activities.includes('Parachuting')}  label="Parachuting" onChange={()=>handleCheckboxChange('Parachuting')}/>
             <CheckBox checked={activities.includes('Kayaking')} label="Kayaking" onChange={()=>handleCheckboxChange('Kayaking')}/>
             <CheckBox checked={activities.includes('Baloon Safaris')} label="Baloon Safaris" onChange={()=>handleCheckboxChange('Baloon Safaris')}/>
             <CheckBox checked={activities.includes('Game Drive')} label="Game Drive" onChange={()=>handleCheckboxChange('Game Drive')}/>
             <CheckBox checked={activities.includes('Sport academies')} label="Sport academies" onChange={()=>handleCheckboxChange('Sport academies')}/>
             <CheckBox checked={activities.includes('Stadia Visits')} label="Stadia Visits" onChange={()=>handleCheckboxChange('Stadia Visits')}/>
             <CheckBox checked={activities.includes('Olympics')} label="Olympics" onChange={()=>handleCheckboxChange('Olympics')}/>
             <CheckBox checked={activities.includes('Formula One')} label="Formula One" onChange={()=>handleCheckboxChange('Formula One')}/>
            <Typography variant="body1" color="primary" marginY={2} fontSize={14.5}>Number of people </Typography>
            <Stack direction="row" gap={2}>
            <BasicInput lbl="Maximum" type="number" value={tour.maximum} name="maximum" onChange={handleChange}/>
            <BasicInput lbl="Minimum" type="number" value={tour.minimum} name="minimum" onChange={handleChange}/>
            </Stack>
            <BasicInput lbl="Promotion (%)"  type="number" value={tour.promotion} name="promotion" onChange={handleChange}/>
            <BasicInput  lbl="Duration" value={tour.duration} name="duration" onChange={handleChange}/>
            <Stack direction={{xs:"column", md:"row"}} gap={{xs:0,md:2}}>
            <BasicInput lbl="Start Date" type="date" value={tour.startdate} name="startdate" onChange={handleChange}/>
            <BasicInput lbl="End Date" type="date" value={tour.endate} name="endate" onChange={handleChange}/>
            </Stack>
            <BasicInput lbl="Deadline" type="date" helperText="Valid Till" value={tour.deadline} name="deadline" onChange={handleChange}/>
            {loading ? <Loader/> :
            <Button type="submit" variant="contained">Update</Button>}
           </Box>
    </AdminDashboard>
}