import { Grid, Divider, Box, Stack, Typography, FormControl, Button } from "@mui/material"
import {BasicInput, LinkBtn} from '../../../components'
import { Lock, Email, VisibilityOff, Visibility } from "@mui/icons-material"
import { AuthWrapper } from "../../../layouts"
import { useNavigate } from "react-router-dom"
import client from "../../../api/client"
import { useState } from "react"
export default function SignIn(){
    const navigate = useNavigate()
    const [type, setType] = useState('password')
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        setData((data) => ({...data, [e.target.name]:e.target.value}))
    }
    const handleVisible = () => {
        setType(type === 'password' ? 'text' : 'password')
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await client.post('/login', data).then((response)=>{
            if(response.data.success){
                localStorage.setItem('user_id', response.data.user._id)
                 navigate('/dashboard')
            }
        })
     
    }
    return (
       <AuthWrapper title="Get Started" caption="Login">
        <Grid bgcolor="whitesmoke" padding={4}>
        <Typography fontWeight="bold" color="primary" variant="h6">Welcome back</Typography>
        <Divider sx={{marginY:2}}></Divider>
        <FormControl component="form" onSubmit={handleSubmit} sx={{width:"100%"}}>
        <Box gap={2} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput required lbl="Email Address" type="email" name="email" onChange={handleChange} start={Email}/>
        <BasicInput show={handleVisible} required lbl="Password" type={type} name="password" onChange={handleChange} end={type === 'password' ? <VisibilityOff/> : <Visibility/>} start={Lock}/>
        </Box>
        <Grid container direction="column" gap={4}>
        <LinkBtn to="/forgotpassword" title="Forgot Password?"/>
        <Stack direction="row" spacing={2} sx={{display:"flex", alignItems:"center"}}>
        <Button type="submit" variant="contained">Submit</Button>
        <LinkBtn to="/signup" title="Don't have an account?"/>
        </Stack>
        </Grid>
        </FormControl>
        </Grid>
    </AuthWrapper>
    )
}