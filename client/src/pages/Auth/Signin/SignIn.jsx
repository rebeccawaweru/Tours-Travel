import { Grid, Divider, Box, Stack, Typography, FormControl, Button } from "@mui/material"
import {BasicInput, LinkBtn} from '../../../components'
import { Lock, Email, VisibilityOff } from "@mui/icons-material"
import { AuthWrapper } from "../../../layouts"
import { useNavigate } from "react-router-dom"
export default function SignIn(){
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/tourpackages')
    }
    return (
       <AuthWrapper title="Get Started" caption="Login">
        <Grid bgcolor="whitesmoke" padding={4}>
        <Typography fontWeight="bold" color="primary" variant="h6">Welcome back</Typography>
        <Divider sx={{marginY:2}}></Divider>
        <FormControl component="form" onSubmit={handleSubmit} sx={{width:"100%"}}>
        <Box gap={2} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput required lbl="Email Address" type="email" name="email" start={Email}/>
        <BasicInput required lbl="Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
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