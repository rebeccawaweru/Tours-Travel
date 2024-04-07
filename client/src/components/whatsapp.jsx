import {Box} from '@mui/material'
import { whatsappchat } from '../utils/helpers'
import Whatsapp from '../assets/whatsapp.png'
export default function WhatsAppChat(){
    return <Box sx={{cursor:"pointer"}} onClick={whatsappchat} component="img" height={80} width={150} objectFit="contain" position="fixed"  zIndex={50} bottom={50} right={15} src={Whatsapp} alt="whatsapp"/>

}