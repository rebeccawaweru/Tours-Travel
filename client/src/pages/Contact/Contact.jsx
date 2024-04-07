import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import Contactbg from '../../assets/contactbg.jpg'
import { AuthWrapper } from "../../layouts";
import { Phone, Email, LocationOn, Facebook, Instagram, X} from "@mui/icons-material";
import { BasicInput, ContactItem, WhatsAppChat } from "../../components";
export default function Contact(){
    return (
      <AuthWrapper title="Get In Touch" caption="Contact Us" bg={Contactbg}>
        <WhatsAppChat/>
        <Grid maxWidth container gap={6} bgcolor="whitesmoke" padding={4}>
           <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" variant="h5">Leave us your info</Typography>
             <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              <Typography marginY={2} variant="body2">
              Get in touch with us today to start planning your dream getaway! Whether you have questions, want to customize your itinerary, or simply need assistance, our team is here to help.
              </Typography>
              
              <Stack direction="row" spacing={2} marginBottom={2}>
              <BasicInput lbl="Full Name*"/>
              <BasicInput lbl="Email*"/>
              </Stack>
      
             <BasicInput lbl="Subject"/>
             <BasicInput lbl="Message*" multiline rows={4}/>
             <Button variant="contained">Submit Now</Button>
           </Grid>

           <Grid item xs={12} md={4}>
            <Typography fontWeight="bold" variant="h5">Location</Typography>
             <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              <Stack direction="column" spacing={5}>
              <ContactItem title="wordwide" icon={<LocationOn/>}/>
               <ContactItem title="info@denzetoursandtravels.com" icon={<Email/>}/>
               <ContactItem title="+254 726 647 255" icon={<Phone/>}/>
              </Stack>

              <Typography fontWeight="bold" variant="h5" marginTop={4}>Social</Typography>
              <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              <Stack fontSize="large" color="primary" direction="column" spacing={5}>
              <ContactItem title="facebook.com" icon={<Facebook/>}/>
              <ContactItem title="instagram.com" icon={ <Instagram/>}/>
               <ContactItem title="twitter.com" icon={ <X/>}/>
              </Stack>
           </Grid>
        </Grid>
      </AuthWrapper>
    )
}