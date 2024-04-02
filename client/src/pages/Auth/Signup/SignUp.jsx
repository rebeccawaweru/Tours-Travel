import { Stack, Typography, FormControl, Button, Divider, Grid } from "@mui/material"
import {BasicInput, LinkBtn} from '../../../components'
import { AuthWrapper } from "../../../layouts"
import { Lock, Email, VisibilityOff, Person } from "@mui/icons-material"
export default function SignUp(){
    
    return (
        <AuthWrapper title="Join Us" caption="Sign Up">
        <Grid bgcolor="whitesmoke" padding={4}>
        <Typography fontWeight="bold" color="primary" variant="h6">Get started</Typography>
         <Divider sx={{marginY:2}}></Divider>

        <FormControl sx={{width:"100%"}}>
        <Grid gap={4} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput required  lbl="Username" type="email" name="email" start={Person}/>
        <BasicInput required lbl="Email Address" type="email" name="email" start={Email}/>
        </Grid>

        <Grid gap={4} sx={{display:{xs:"block",sm:"block", md:"flex", lg:"flex"}}}>
        <BasicInput required lbl="Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        <BasicInput required lbl="Confirm Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        </Grid>

        <Stack direction="row" spacing={2} sx={{display:"flex", alignItems:"center", marginTop:2}}>
        <Button variant="contained">Submit</Button>
        <LinkBtn to="/signin" title="Already have an account?"/>
        </Stack>
        </FormControl>
        </Grid>
     </AuthWrapper>
    )
}