import { Typography, FormControl, Button, Divider, Box, Grid} from "@mui/material"
import {BasicInput} from '../../../components'
import { AuthWrapper } from "../../../layouts"
import { Lock, VisibilityOff, Code} from "@mui/icons-material"
export default function ResetPassword(){
    return (
        <AuthWrapper title="Security" caption="Reset Password">
        <Grid bgcolor="whitesmoke" padding={4}>
        <Typography fontWeight="bold" color="primary" variant="h6">Confirmation</Typography>
        <Divider sx={{marginY:2}}></Divider>
        <FormControl sx={{width:"100%"}}>
        <BasicInput required lbl="OTP" type="text" name="otp" start={Code}/>
        <BasicInput required lbl="New Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        <BasicInput required lbl="Confirm New Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        <Box>
        <Button variant="contained">Submit</Button>
        </Box>
        </FormControl>
        </Grid>
     </AuthWrapper>
    )
}