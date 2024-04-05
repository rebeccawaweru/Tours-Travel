import {Box, Typography} from '@mui/material'
export default function Service({service}){
    return     <Box width="100%">
    <Box display="flex" justifyContent="space-between">
       <Typography>{service}</Typography>
       <Typography>100%</Typography>
    </Box>
    <Box width="100%" border="2px solid #2196f3"></Box> 
 </Box>
}