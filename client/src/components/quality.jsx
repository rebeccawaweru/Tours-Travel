import { Stack, Typography, Box } from "@mui/material"
export default function Quality(props){
    const {title, caption, src, alt} = props
    return <Stack direction="row" spacing={2}>
      
      <Typography component="img" src={src} alt={alt}></Typography>
       <Box>
      <Typography fontSize={14} fontWeight="bold">{title}</Typography>
      <Typography fontSize="small">{caption}</Typography>
       </Box>
    </Stack>

}