import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import { AuthWrapper } from "../../layouts";
import { Phone, CallMade, Email, LocationOn, Facebook, Instagram, X} from "@mui/icons-material";
import { BasicInput, ContactItem, WhatsAppChat, Loader } from "../../components";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
export default function Contact(){
  const {t} = useTranslation()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    fullname:"",
    email:"",
    subject:"",
    message:""
  });
  const handleChange = (e) =>{
    setValues(values => ({...values, [e.target.name]:e.target.value}))
   }
   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true);
            await emailjs
            .send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              {
                name: values.fullname,
                email: values.email,
                message: values.message,
                subject: values.subject || 'Website Enquiry'
              },
            ).then(()=>{
               // console.log(res)
               Swal.fire(t("swal.success"), t("swal.message"), 'success')
               setValues({fullname:"",email:"",subject:"",message:""})
            }).catch((error)=>{
              Swal.fire(t("swal.error"), t("swal.err"),  'error')
            })
           setLoading(false)
    }
    return (
      <AuthWrapper title={t("contact.title")} caption={t("contact.caption")} bg="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485086/contactbg_e8ukqt.jpg">
        <WhatsAppChat/>
        <Grid maxWidth container gap={5} bgcolor="whitesmoke" padding={4}>
           <Grid component="form" onSubmit={handleSubmit} item xs={12} md={6} container gap={2}>
              <Box width="100%">
              <Typography fontWeight="bold" variant="h5">{t("contact.leave")}</Typography>
             <Box marginTop={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              </Box>
              <Typography  variant="body2">{t("contact.desc")}</Typography>
              
              <Stack width="100%" direction="row" spacing={2} marginBottom={2}>
              <BasicInput required lbl={t("contact.name")} name="fullname" value={values.fullname} onChange={handleChange}/>
              <BasicInput required lbl={t("details.email")} name="email" value={values.email} onChange={handleChange}/>
              </Stack>
             <BasicInput lbl={t("contact.sub")} name="subject" value={values.subject} onChange={handleChange}/>
             <BasicInput required lbl={t("contact.message")} name="message" value={values.message} onChange={handleChange} multiline rows={4}/>
             {loading ? <Loader/> : <Button type="submit" variant="contained">{t("contact.submit")}</Button>}
           </Grid>

           <Grid item xs={12} md={5}>
            <Typography fontWeight="bold" variant="h5">{t("location")}</Typography>
             <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              <Stack direction="column" spacing={5}>
              <ContactItem title={t("contact.location")} icon={<LocationOn/>}/>
               <ContactItem title="info@denzetoursandtravels.com" icon={<Email/>}/>
               <ContactItem title={t("contact.phone1")} icon={<Phone/>}/>
               <ContactItem title={t("contact.phone2")} icon={<CallMade/>}/>
               <ContactItem title={t("contact.phone3")} icon={<CallMade/>}/>
              </Stack>

              <Typography fontWeight="bold" variant="h5" marginTop={4}>{t("social")}</Typography>
              <Box marginY={2} width="10%" borderBottom={2} borderColor="#2196f3"></Box>
              <Stack fontSize="large" color="primary" direction="column" spacing={5}>
              <ContactItem title="facebook.com" icon={<Facebook/>}/>
              <ContactItem title={<a style={{textDecoration:"none",color:"black"}} href="https://www.instagram.com/denzetoursandtravels" target="_blank">denzetoursandtravels</a>} icon={ <Instagram/>}/>
              <ContactItem title={<a style={{textDecoration:"none",color:"black"}} href="https://twitter.com/DENZETours" target="_blank">DENZETours</a>} icon={ <X/>}/>
              </Stack>
           </Grid>
        </Grid>
      </AuthWrapper>
    )
}