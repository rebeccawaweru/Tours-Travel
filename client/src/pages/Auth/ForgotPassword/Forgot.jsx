import { Grid, Divider,  Stack, Typography, FormControl, Button } from "@mui/material"
import {BasicInput, LinkBtn} from '../../../components'
import {  Email,} from "@mui/icons-material"
import { AuthWrapper } from "../../../layouts"
export default function ForgotPassword(){
    return (
       <AuthWrapper title="Security" caption="Forgot Password">
        <Grid bgcolor="whitesmoke" padding={4}>
        <Typography fontWeight="bold" color="primary" variant="h6">Enter email to receive instructions</Typography>
        <Divider sx={{marginY:2}}></Divider>
        <FormControl sx={{width:"100%"}}>
        <BasicInput required lbl="Email Address" type="email" name="email" start={Email}/>
        <Stack direction="row" spacing={2} sx={{display:"flex", alignItems:"center"}}>
        <Button variant="contained">Submit</Button>
        <LinkBtn to="/signin" title="Login"/>
        </Stack>
        </FormControl>
        </Grid>
    </AuthWrapper>
    )
}