import Wrapper from "../../layouts/Wrapper";
import { Box, Container, Paper, Typography, Icon, Grid, Stack, Button } from "@mui/material";
import Contactbg from '../../assets/contactbg.jpg'
import { AuthWrapper } from "../../layouts";
import { Phone, Email, LocationOn} from "@mui/icons-material";
import { BasicInput, ContactItem } from "../../components";
export default function Contact(){
    return (
      <AuthWrapper title="Get In Touch" caption="Contact Us" bg={Contactbg}>
        <Box component={Stack}  direction={{xs:"column",sm:"column",md:"row"}} spacing={2} paddingY={5} maxWidth justifyContent="space-between" alignItems="center">
        <ContactItem icon={<Phone/>}/>
        <ContactItem icon={<Email/>}/>
        <ContactItem icon={<LocationOn/>}/>      
        </Box>
        
        <Box component={Grid} container gap={4} direction="column"  bgcolor="whitesmoke" padding={5}>
            
            <Typography textAlign="center" fontWeight="bold" variant="h5">Leave us your info</Typography>
             <Typography textAlign="center" color="inherit">and we will get back to you.
             </Typography>
            
             <Stack direction="row" spacing={2}>
             <BasicInput lbl="Full Name*"/>
             <BasicInput lbl="Email*"/>
             </Stack>
        
             <BasicInput lbl="Subject"/>
             <BasicInput lbl="Message*" multiline rows={4}/>
             <Button variant="contained">Submit Now</Button>
        </Box>
      
    
      </AuthWrapper>
    )
}