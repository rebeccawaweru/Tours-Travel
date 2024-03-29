import { Typography, FormControl, Button, Divider, Box} from "@mui/material"
import {BasicInput} from '../../../components'
import { AuthWrapper } from "../../../layouts"
import { Lock, VisibilityOff, Code} from "@mui/icons-material"
export default function ResetPassword(){
    return (
        <AuthWrapper title="Security" caption="Reset Password">
        <Typography fontWeight="bold" color="primary" variant="h6">Confirmation</Typography>
        <Divider sx={{marginY:2}}></Divider>
        <FormControl sx={{width:"100%"}}>
        <BasicInput lbl="OTP" type="text" name="otp" start={Code}/>
        <BasicInput lbl="New Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        <BasicInput lbl="Confirm New Password" type="password" name="password" end={<VisibilityOff/>} start={Lock}/>
        <Box>
        <Button variant="contained">Submit</Button>
        </Box>
        </FormControl>
     </AuthWrapper>
    )
}