import { Grid, Divider, Box, Stack, Typography, FormControl, Button } from "@mui/material"
import {BasicInput, LinkBtn} from '../../../components'
import { Lock, Email, VisibilityOff } from "@mui/icons-material"
import { AuthWrapper } from "../../../layouts"
export default function SignIn(){
    return (
       <AuthWrapper title="Get Started" caption="Login">
        <Typography fontWeight="bold" color="inherit" variant="h6">Welcome back</Typography>
        <Divider sx={{marginY:2}}></Divider>
        <FormControl sx={{width:"100%"}}>
        <Box gap={2} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput lbl="Email Address" type="email" name="email" start={Email}/>
        <BasicInput lbl="Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        </Box>
        <Grid container direction="column" gap={4}>
        <LinkBtn to="/forgotpassword" title="Forgot Password?"/>
        <Stack direction="row" spacing={2} sx={{display:"flex", alignItems:"center"}}>
        <Button variant="contained">Submit</Button>
        <LinkBtn to="/signup" title="Don't have an account?"/>
        </Stack>
        </Grid>
        </FormControl>
       
    </AuthWrapper>
    )
}