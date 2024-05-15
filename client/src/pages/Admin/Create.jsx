import { useState } from "react";
import { BasicInput, CustomSelect, BreadCrumb, CheckBox, Loader} from "../../components";
import { AdminDashboard } from "../../layouts";
import { Box, Button, MenuItem, Stack, Typography,Grid } from "@mui/material";
import { handleFileUpload } from "../../utils/helpers";
import client from "../../api/client"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'
import { DeleteForever, Edit } from "@mui/icons-material";
export default function CreatePackage(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [activities, setActivities] = useState([])
    const [rate, setRate] = useState({
        ratename: '',
        pricerate: 0
    });
    const [rates, setRates] = useState([])
    const [hotel,setHotel] = useState({
        hotelname:"",
        price:"",
        currency:"KES"
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
    const [preview,setPreview] = useState('')
    const [image, setImage] = useState('')
    const [country,setCountry] = useState('')
    const [region,setRegion] = useState('')
    const [tour, setTour] = useState({
        title:"",
        category:"",
        location:"",
        minimum:0,
        maximum:0,
        price:0,
        promotion:0,
        days:0,
        nights:0,
        startdate:"",
        endate:"",
        deadline:"",
        currency:"KES"
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
            currency:"KES"
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
    const handleDelete4 = (index) => {
        // Remove the rate at the specified index
        setExclusives((prevEx) => prevEx.filter((_, i) => i !== index));
    };
    const handleUpdate = (index) => {
        const current = hotels[index]
        setHotel({
          hotelname:current.hotelname,
          price: current.price,
          currency: current.currency
  
        })
        handleDelete3(index)
    }
    const handleUpdate2 = (index) => {
        const current = rates[index]
        setRate({
            ratename: current.ratename,
            pricerate: current.pricerate
  
        })
        handleDelete(index)
    }
    const handleUpdate3 = (index) => {
        const current = inclusives[index]
        setInclusive({     
            desc: current.desc
  
        })
        handleDelete2(index)
    }
    const handleUpdate4 = (index) => {
        const current = exclusives[index]
        setExclude({     
            desc: current.desc
  
        })
        handleDelete4(index)
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
        const data = {...tour, country:country,region:region,poster:cover.secure_url, rates:rates,hotels:hotels, inclusives:inclusives, exclusives:exclusives, activity:activities}
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
                <MenuItem value="Vacations">Vacations</MenuItem>
                <MenuItem value="Educational Tours">Educational Tours</MenuItem>
                <MenuItem value="Special Tours">Special Tours</MenuItem>
                <MenuItem value="Sporting events">Sporting events</MenuItem>
                <MenuItem value="Charity Tours">Charity Tours</MenuItem>
                <MenuItem value="Wine tasting tours">Wine tasting tours</MenuItem>
                <MenuItem value="Food festivals">Food festivals</MenuItem>
                <MenuItem value="Bird watching explorations">Bird watching explorations</MenuItem>
                <MenuItem value="Historic & Cultural Site Tours">Historic & Cultural Site Tours</MenuItem>
                <MenuItem value="Sky gliding tours">Sky gliding tours</MenuItem>
                <MenuItem value="Luxury Cruise Trips">Luxury Cruise Trips</MenuItem>
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

           <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>+ Hotels</Typography>
           {hotels.length > 0 ? 
                <Grid container direction="column" gap={2} marginBottom={2}>
                    {hotels.map((hotel, index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Typography>{hotel.hotelname} - {hotel.price} {hotel.currency}</Typography> 
                            <Edit onClick={()=>handleUpdate(index)}/>
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
            </CustomSelect>
            <Typography marginTop={3} onClick={handleAdd3} sx={{cursor:"pointer"}}>Save</Typography>
            </Stack>

           <Stack direction="row" gap={2}>
            <BasicInput required lbl="Display Price" type="number" name="price"  onChange={handleChange}/>
            <CustomSelect lbl="Currency" value={tour.currency} name="currency" onChange={handleChange}>
                <MenuItem value="KES">KES</MenuItem>
            </CustomSelect>
            </Stack>

            <Stack direction="row" gap={2}>
            <BasicInput required type="number" placeholder="e.g 2" lbl="Nights" name="nights" onChange={handleChange}/>
            <BasicInput lbl="Days" type="number" placeholder="e.g 2" name="days" onChange={handleChange}/>
             </Stack>


            <Typography variant="body1" color="primary" marginBottom={2} fontSize={14.5}>+ Add Rates</Typography>
            {rates.length > 0 ? 
                <Grid container direction="column" gap={2} marginBottom={2}>
                    {rates.map((rate,index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Typography>{rate.ratename} - {Number(rate.pricerate).toLocaleString() || 0}</Typography> 
                            <Edit onClick={()=>handleUpdate2(index)}/>
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
                            <Edit onClick={() => handleUpdate3(index)}/>
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
                            <Edit onClick={()=>handleUpdate4(index)}/>
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
           
             {loading ? <Loader/> :
            <Button type="submit" variant="contained">Submit</Button>}
           </Box>
    </AdminDashboard>
}