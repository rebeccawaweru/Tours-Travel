import { Stack, Typography, FormControl, Button, Divider, Grid } from "@mui/material"
import {BasicInput, LinkBtn} from '../../../components'
import { AuthWrapper } from "../../../layouts"
import { Lock, Email, Visibility, VisibilityOff, Person } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import client from "../../../api/client"
import Swal from "sweetalert2"
export default function SignUp(){
    const navigate = useNavigate()
    const [type, setType] = useState('password')
    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const handleChange = (e) =>{
        setData((data) => ({...data, [e.target.name]:e.target.value}))
    }
    const handleVisible = () => {
        setType(type === 'password' ? 'text' : 'password')
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await client.post('/signup', data).then((response)=>{
            console.log(response)
            if(response.data.success){
                Swal.fire('Success', response.data.message, 'success')
                 navigate('/signin')
            }
        })
    }
    return (
        <AuthWrapper title="Join Us" caption="Sign Up">
        <Grid bgcolor="whitesmoke" padding={4}>
        <Typography fontWeight="bold" color="primary" variant="h6">Get started</Typography>
         <Divider sx={{marginY:2}}></Divider>

        <FormControl component="form" onSubmit={handleSubmit} sx={{width:"100%"}}>
        <Grid gap={4} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput required  lbl="Username" name="username" onChange={handleChange} start={Person}/>
        <BasicInput required lbl="Email Address" type="email" name="email" onChange={handleChange} start={Email}/>
        </Grid>

        <Grid gap={4} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput show={handleVisible} required lbl="Password" type={type} name="password" onChange={handleChange} end={type === 'password' ? <VisibilityOff/> : <Visibility/>} start={Lock}/>
        <BasicInput show={handleVisible} required lbl="Confirm Password" type={type} name="confirmpassword" onChange={handleChange} end={type === 'password' ? <VisibilityOff/> : <Visibility/>} start={Lock}/>
        </Grid>

        <Stack direction="row" spacing={2} sx={{display:"flex", alignItems:"center", marginTop:2}}>
        <Button type="submit" variant="contained">Submit</Button>
        <LinkBtn to="/signin" title="Already have an account?"/>
        </Stack>
        </FormControl>

        </Grid>
     </AuthWrapper>
    )
}