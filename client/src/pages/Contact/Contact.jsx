import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import Contactbg from '../../assets/contactbg.jpg'
import { AuthWrapper } from "../../layouts";
import { Phone, CallMade, Email, LocationOn, Facebook, Instagram, X} from "@mui/icons-material";
import { BasicInput, ContactItem, WhatsAppChat } from "../../components";
export default function Contact(){
    return (
      <AuthWrapper title="Get In Touch" caption="Contact Us" bg={Contactbg}>
        <WhatsAppChat/>
        <Grid maxWidth container gap={5} bgcolor="whitesmoke" padding={4}>
           <Grid item xs={12} md={6} container gap={2}>
              <Box width="100%">
              <Typography fontWeight="bold" variant="h5">Leave us your info</Typography>
             <Box marginTop={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              </Box>
             

              <Typography  variant="body2">
              Get in touch with us today to start planning your dream getaway! Whether you have questions, want to customize your itinerary, or simply need assistance, our team is here to help.
              </Typography>
              
              <Stack width="100%" direction="row" spacing={2} marginBottom={2}>
              <BasicInput lbl="Full Name*"/>
              <BasicInput lbl="Email*"/>
              </Stack>
      
             <BasicInput lbl="Subject"/>
             <BasicInput lbl="Message*" multiline rows={4}/>
             <Button variant="contained">Submit Now</Button>
           </Grid>

           <Grid item xs={12} md={5}>
            <Typography fontWeight="bold" variant="h5">Location</Typography>
             <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              <Stack direction="column" spacing={5}>
              <ContactItem title="Hurlingham Plaza, Along Argwings Kodhek Road, Nairobi, Kenya" icon={<LocationOn/>}/>
               <ContactItem title="info@denzetoursandtravels.com" icon={<Email/>}/>
               <ContactItem title="Global: +254 707 741 232 | +254 769 665 298" icon={<Phone/>}/>
               <ContactItem title="Europe/USA: +41 779 361 338" icon={<CallMade/>}/>
               <ContactItem title="United Kingdom: +44 792 805 4212" icon={<CallMade/>}/>
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