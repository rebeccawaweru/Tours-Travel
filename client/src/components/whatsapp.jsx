import {Box} from '@mui/material'
import { whatsappchat } from '../utils/helpers'
export default function WhatsAppChat(){
    return <Box sx={{cursor:"pointer"}} onClick={whatsappchat} component="img" height={50} width={100} objectFit="contain" position="fixed"  zIndex={50} bottom={50} right={15} src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485136/whatsapp_yikcsd.png" alt="denze whatsapp contact"/>

}